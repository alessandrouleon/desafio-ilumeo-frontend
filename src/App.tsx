import { ThemeProvider } from '@mui/material';
import { LightTheme } from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
    <GlobalStyle />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
