import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Login';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <Home/>
    </ThemeProvider>
  );
}
