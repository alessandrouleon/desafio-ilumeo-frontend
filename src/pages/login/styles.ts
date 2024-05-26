import { Typography, createTheme } from "@mui/material";
import styled from "styled-components";
import { COLORS } from "../../styles/theme/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: -7rem;
`;

export const PointLabel = styled(Typography).attrs(() => ({
  variant: "h5",
  fontWeight: "400",
  marginLeft: "0.8rem",
  color: COLORS.NEUTRAL_600,
}))`
  text-align: left;
`;

export const PointLabelBold = styled(Typography).attrs(() => ({
  variant: "h4",
  fontWeight: "600",
  color: COLORS.NEUTRAL_400,
  marginLeft: "0.5rem"
}))`
  text-align: left;
`;

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            backgroundColor: COLORS.BACKGROUND_BASE,
            "&:before": {
              borderBottom: "none",
            },
            "&:after": {
              borderBottom: "none",
            },
            "&:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "& .MuiInputBase-input": {
              backgroundColor: COLORS.BACKGROUND_BASE,
              color: `${COLORS.NEUTRAL_400}`,
              fontSize: "1.2rem",
              fontWeight: "bold",
            },
          },
          "& .MuiInputLabel-root": {
            color: `${COLORS.NEUTRAL_600}`,
            fontSize: "0.9rem",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: `${COLORS.NEUTRAL_600}`,
            fontSize: "0.9rem",
          },
          "& .MuiInputLabel-root.MuiFormLabel-filled": {
            color: `${COLORS.NEUTRAL_600}`,
          },
        },
      },
    },
  },
});
