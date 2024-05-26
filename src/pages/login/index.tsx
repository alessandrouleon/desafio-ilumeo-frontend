import { Box, Stack, TextField, ThemeProvider } from "@mui/material";
import {
  Container,
  Content,
  PointLabel,
  PointLabelBold,
  theme,
} from "./styles";
import { CustomButton } from "../../components/button";
import { useState } from "react";
import { UserHistory } from "../../services/history/userHistory";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [userCodeValue, setUserCodeValue] = useState("");
  const [spanMessage, setSpanMessage] = useState(false);

  const navigate = useNavigate();
  const userCode = UserHistory.getLocalStorageUserCode();

  const isLoginRoute = location.pathname.toLowerCase().includes("/");

  if (userCode && isLoginRoute) {
    UserHistory.removeLocalStorageUserCode();
  }

  const onSubmit = () => {
    if (userCodeValue.length === 0) {
      setSpanMessage(true);
    } else {
      UserHistory.setLocalStorageUserCode(userCodeValue);
      navigate("/home", {
        state: { userCodeValue },
      });
    }
  };

  return (
    <Container>
      <Content>
        <PointLabel>Ponto</PointLabel>
        <PointLabelBold>Ilumeo</PointLabelBold>
      </Content>
      <Box component="form" mt={2} mb={2} autoComplete="off">
        <ThemeProvider theme={theme}>
          <TextField
            label="Código do usuário"
            variant="filled"
            fullWidth
            value={userCodeValue}
            onChange={(e) => {
              setUserCodeValue(e.target.value);
              if (e.target.value.trim() === "") {
                setSpanMessage(true);
              } else {
                setSpanMessage(false);
              }
            }}
            error={spanMessage}
            helperText={spanMessage ? "Campo obrigatório" : ""}
            style={{ marginBottom: "0.5rem" }}
            InputLabelProps={{ shrink: true }}
          />
        </ThemeProvider>
        <Stack>
          <CustomButton title=" Confirmar" onClick={onSubmit} />
        </Stack>
      </Box>
    </Container>
  );
}
