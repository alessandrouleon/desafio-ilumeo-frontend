import styled from "styled-components";
import { COLORS } from "../../styles/theme/colors";

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  background-color: ${COLORS.BACKGROUND_BASE};
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 1rem 0.8rem;
`;

export const StylesDate = styled.text`
text-align: left;
align-content: center;
font-size: 0.8rem;
font-weight: 500;
color: ${COLORS.NEUTRAL_700};
`;


export const StylesHours = styled.text`
text-align: right;
align-content: center;
font-size: 0.8rem;
font-weight: 500;
color: ${COLORS.NEUTRAL_700};
`;
