import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Login';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';

import { DMSans_400Regular, DMSans_500Medium, DMSans_700Bold, useFonts } from "@expo-google-fonts/dm-sans";
import { ActivityIndicator } from "react-native";

export default function App() {

  const [fontsLoaded] = useFonts({DMSans_400Regular, DMSans_500Medium, DMSans_700Bold});

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home/> : <ActivityIndicator/>}
    </ThemeProvider>
  );
}
