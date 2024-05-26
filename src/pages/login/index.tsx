import {
  Box,
  Stack,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { Container, Content, PointLabel, PointLabelBold, theme } from "./styles";
import { CustomButton } from "../../components/button";

export function Login() {
  return (
    <Container>
      <Content>
        <PointLabel>Ponto</PointLabel>
        <PointLabelBold>
          Ilumeo
        </PointLabelBold>
      </Content>
      <Box component="form" mt={2} mb={2} autoComplete="off">
        <ThemeProvider theme={theme}>
          <TextField
            label="Código do usuário"
            variant="filled"
          />
        </ThemeProvider>
        <Stack>
          <CustomButton title=" Confirmar" />
        </Stack>
      </Box>
    </Container>
  );
}
