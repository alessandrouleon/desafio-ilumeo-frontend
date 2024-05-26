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
import { useState } from "react";
import { PointRecordList } from "../../components/pointRecordList";

export function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <MediaQuery>
    <Container>
      <Header>
        <Box>
          <WatchLabel>Relógio de pontos</WatchLabel>
          <CurrentTime>0h {currentTime}m</CurrentTime>
          <CurrentTimeLabel>Horas de hoje</CurrentTimeLabel>
        </Box>
        <Box>
          <UserCodeLabel>#4SXXFMF</UserCodeLabel>
          <UserLabel>Usuário</UserLabel>
        </Box>
      </Header>
      {currentTime === 0 ? (
        <CustomButton title=" Hora de entrada" />
      ) : (
        <CustomButton title=" Hora da saída" />
      )}

      <LeftAlignedWrapper>
        <PreviousDaysLabel>Dias anteriores</PreviousDaysLabel>
      </LeftAlignedWrapper>
      <StyleScroll>
      <PointRecordList styleDate="22/11/23" stylesHours="7h 30m"/>
      <PointRecordList styleDate="04/11/23" stylesHours="7h 30m"/>
      <PointRecordList styleDate="03/11/23" stylesHours="7h 30m"/>
      <PointRecordList styleDate="02/11/23" stylesHours="7h 30m"/>
      <PointRecordList styleDate="22/11/23" stylesHours="7h 30m"/>
      <PointRecordList styleDate="04/11/23" stylesHours="7h 30m"/>
      <PointRecordList styleDate="03/11/23" stylesHours="7h 30m"/>
      <PointRecordList styleDate="02/11/23" stylesHours="7h 30m"/>
      <PointRecordList styleDate="22/11/23" stylesHours="7h 30m"/>
      <PointRecordList styleDate="04/11/23" stylesHours="7h 30m"/>
      <PointRecordList styleDate="03/11/23" stylesHours="7h 30m"/>
      <PointRecordList styleDate="02/11/23" stylesHours="7h 30m"/>
      </StyleScroll>
    </Container>
    </MediaQuery>
  );
}
