import { Box } from "@mui/material";
import {
  Container,
  CurrentTime,
  CurrentTimeLabel,
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
  getAllPointByUserCode,
  // getSinglePointByUserCode,
  registerUserCode,
} from "../../services/pointRecord";
import { format } from "date-fns";
import { CustomizedSnackbars } from "../../components/alert";

interface PointRecordProps {
  id: string;
  userCode: string;
  createdAt: string;
  workedHours: string;
  finishedAt: string;
}

export function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentTime, setCurrentTime] = useState<PointRecordProps[]>([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [pointRecords, setPointRecords] = useState<PointRecordProps[]>([]);

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
      // const hours = await getSinglePointByUserCode(String(userCode));
      // setCurrentTime(hours.data.pointRecords);
      const response = await getAllPointByUserCode(String(userCode));
      setPointRecords(response.data.pointRecords);
    } catch (error) {
      console.error("Erro ao buscar registros de pontos", error);
    }
  }, [userCode]);

  useEffect(() => {
    fetchPointRecords();
  }, [fetchPointRecords]);

  return (
    <MediaQuery>
      <Container>
        <CustomizedSnackbars
          open={showSnackbar}
          onClose={() => setShowSnackbar(false)}
          message="Registro de ponto realizado com sucesso!"
          bgColorsSnack="success"
        />
        <Header>
          <Box>
            <WatchLabel>Relógio de pontos</WatchLabel>
            <CurrentTime>
              {0}h {0}m
            </CurrentTime>
            <CurrentTimeLabel>Horas de hoje</CurrentTimeLabel>
          </Box>
          <Box>
            <UserCodeLabel>{userCode}</UserCodeLabel>
            <UserLabel>Usuário</UserLabel>
          </Box>
        </Header>
        {currentTime ? (
          <CustomButton
            title=" Hora de entrada"
            onClick={handleRegistrationPoint}
          />
        ) : (
          <CustomButton title=" Hora da saída" />
        )}

        <LeftAlignedWrapper>
          <PreviousDaysLabel>Dias anteriores</PreviousDaysLabel>
        </LeftAlignedWrapper>
        <StyleScroll>
          {pointRecords.map((record, index) => (
            <PointRecordList
              key={index}
              styleDate={
                record.finishedAt &&
                format(new Date(record.finishedAt), "dd/MM/yy")
              }
              stylesHours={formatWorkedHours(record.workedHours)}
            />
          ))}
        </StyleScroll>
      </Container>
    </MediaQuery>
  );
}
