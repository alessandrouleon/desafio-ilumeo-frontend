import { Container, StylesDate, StylesHours } from "./styles";

interface TextProps {
  styleDate: string;
  stylesHours: string;
}
export function PointRecordList({ styleDate, stylesHours }: TextProps) {
  return (
    <Container>
      <StylesDate>{styleDate}</StylesDate>
      <StylesHours>{stylesHours}</StylesHours>
    </Container>
  );
}
