import styled from "styled-components";
import { COLORS } from "../../styles/theme/colors";
import { Typography } from "@mui/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin: auto;
`;

export const Header = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
`;

export const WatchLabel = styled(Typography).attrs(() => ({
  sx: {
    fontSize: "1rem",
    color: COLORS.NEUTRAL_400,
  },
}))`
  text-align: left;
`;

export const UserCodeLabel = styled(Typography).attrs(() => ({
  sx: {
    fontSize: "1rem",
    color: COLORS.NEUTRAL_400,
  },
}))`
  text-align: right;
`;

export const UserLabel = styled(Typography).attrs(() => ({
  sx: {
    fontSize: "0.8rem",
    color: COLORS.NEUTRAL_800,
  },
}))`
  text-align: right;
`;

export const CurrentTime = styled(Typography).attrs(() => ({
  sx: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginTop: "1rem",
    color: COLORS.NEUTRAL_400,
  },
}))`
  text-align: left;
`;

export const CurrentTimeLabel = styled(Typography).attrs(() => ({
  sx: {
    fontSize: "0.8rem",
    color: COLORS.NEUTRAL_600,
  },
}))`
  text-align: left;
`;

export const LeftAlignedWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  text-align: left;
`;

export const PreviousDaysLabel = styled(Typography).attrs(() => ({
  sx: {
    fontSize: "1rem",
    color: COLORS.NEUTRAL_500,
  },
}))``;

export const StyleScroll = styled.div`
  height: 50%;
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  scrollbar-width: none;

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const MediaQuery = styled.div`
  @media screen and (max-width: 390px) {
    height: 100vh;
    width: 90%;
    margin: auto;
  }
  @media screen and (min-width: 391px) and (max-width: 768px) {
    height: 100vh;
    width: 70%;
    margin: auto;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    height: 100vh;
    width: 60%;
    margin: auto;
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    height: 100vh;
    width: 40%;
    margin: auto;
  }
  @media screen and (min-width: 1441px) and (max-width: 1920px) {
    height: 100vh;
    width: 30%;
    margin: auto;
  }
  @media screen and (min-width: 1921px) and (max-width: 3840px) {
    height: 100vh;
    width: 20%;
    margin: auto;
  }
`;
