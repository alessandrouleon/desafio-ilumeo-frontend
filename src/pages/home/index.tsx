import { Box } from "@mui/material";
import {
  CenteredBox,
  Container,
  CurrentTime,
  CurrentTimeLabel,
  CustomTypography,
  Header,
  LeftAlignedWrapper,
  MediaQuery,
  PreviousDaysLabel,
  StyleScroll,
  UserCodeLabel,
  UserLabel,
  WatchLabel,
} from "./styles";
import { CustomButton } from "../../components/button";
import { useCallback, useEffect, useState } from "react";
import { PointRecordList } from "../../components/pointRecordList";
import { useLocation, useNavigate } from "react-router-dom";
import { UserHistory } from "../../services/history/userHistory";
import {
  finishUserCode,
  getAllPointByUserCode,
  getSinglePointByUserCode,
  registerUserCode,
} from "../../services/pointRecord";
import { format } from "date-fns";
import { CustomizedSnackbars } from "../../components/alert";
import { calculateCurrentTimeDifference } from "../../utils/calculateTime";

interface PointRecordProps {
  id: string;
  userCode: string;
  createdAt: string;
  workedHours: string;
  finishedAt: string;
}

export function Home() {
  const [diference, setDifference] = useState("");
  const [showcurrentTime, setShowCurrentTime] = useState(false);
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [pointRecords, setPointRecords] = useState<PointRecordProps[]>([]);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const userCodeValue = location.state?.userCodeValue;

  const userCode = UserHistory.getLocalStorageUserCode();

  const handleRegistrationPoint = async () => {
    try {
      if (userCodeValue === userCode) {
        const response = await registerUserCode(String(userCode));
        setTimeout(() => {
          navigate("/");
        }, 3000);
        setShowSnackbar(true);
        setMessage("Registro de ponto realizado com sucesso!");
        return response;
      } else {
        console.error("Registros de pontos nao confere");
      }
    } catch (error) {
      console.error("Erro ao criar registros de pontos", error);
    }
  };

  const handleFinishUserCode = async () => {
    try {
      if (userCodeValue === userCode) {
        const response = await finishUserCode(String(userCode));
        setTimeout(() => {
          navigate("/");
        }, 3000);
        setShowSnackbar(true);
        setMessage("Registro de ponto finalizado com sucesso!");
        return response;
      } else {
        console.error("Registros de pontos nao confere");
      }
    } catch (error) {
      console.error("Erro ao criar registros de pontos", error);
    }
  };

  const formatWorkedHours = (workedHours: string) => {
    const [hours, minutes] = workedHours.split(":").map(Number);
    return `${hours}h ${minutes}m`;
  };

  const fetchPointRecords = useCallback(async () => {
    try {
      const response = await getAllPointByUserCode(String(userCode));
      setPointRecords(response.data.pointRecords);
    } catch (error) {
      console.error("Erro ao buscar registros de pontos", error);
    }
  }, [userCode]);

  useEffect(() => {
    fetchPointRecords();
  }, [fetchPointRecords]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSinglePointByUserCode(String(userCode));
        setCurrentTime(response.data.createdAt);
        if (!response.data) {
          setShowCurrentTime(true);
        }
      } catch (error) {
        setShowCurrentTime(true);
        console.error("Erro ao obter os dados:", error);
      }
    };
    fetchData();
    const calculateDifference = () => {
      const timeDifference = calculateCurrentTimeDifference(
        String(currentTime)
      );
      setDifference(timeDifference);
    };
    calculateDifference();
    const interval = setInterval(calculateDifference, 60000);

    return () => clearInterval(interval);
  }, [userCode, currentTime]);

  return (
    <MediaQuery>
      <Container>
        <CustomizedSnackbars
          open={showSnackbar}
          onClose={() => setShowSnackbar(false)}
          message={message}
          bgColorsSnack="success"
        />
        <Header>
          <Box>
            <WatchLabel>Relógio de pontos</WatchLabel>
            <CurrentTime>{showcurrentTime ? "0h 0m" : diference}</CurrentTime>
            <CurrentTimeLabel>Horas de hoje</CurrentTimeLabel>
          </Box>
          <Box>
            <UserCodeLabel>{userCode}</UserCodeLabel>
            <UserLabel>Usuário</UserLabel>
          </Box>
        </Header>
        {showcurrentTime ? (
          <CustomButton
            title=" Hora de entrada"
            onClick={handleRegistrationPoint}
          />
        ) : (
          <CustomButton title=" Hora da saída" onClick={handleFinishUserCode} />
        )}

        <LeftAlignedWrapper>
          <PreviousDaysLabel>Dias anteriores</PreviousDaysLabel>
        </LeftAlignedWrapper>
        <StyleScroll>
          {pointRecords && pointRecords.length > 0 ? (
            pointRecords.map((record, index) => (
              <PointRecordList
                key={index}
                styleDate={
                  record.finishedAt &&
                  format(new Date(record.finishedAt), "dd/MM/yy")
                }
                stylesHours={formatWorkedHours(record.workedHours)}
              />
            ))
          ) : (
            <CenteredBox>
              <CustomTypography variant="subtitle1">
              Usuário não tem registro de ponto para mostrar!
              </CustomTypography>
            </CenteredBox>
          )}
        </StyleScroll>
      </Container>
    </MediaQuery>
  );
}
