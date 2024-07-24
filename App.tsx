import { StatusBar } from 'expo-status-bar';
import { SigIn } from './src/screens/signIn';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';

import { DMSans_400Regular, DMSans_500Medium, DMSans_700Bold, useFonts } from "@expo-google-fonts/dm-sans";
import { ActivityIndicator } from "react-native";
import { Register } from './src/screens/register';
import { PassRecovery } from './src/screens/passRecovery';
import { PassRecoveryToken } from './src/screens/passRecovery/indexToken';
import { PassChange } from './src/screens/passRecovery/PassChange';

export default function App() {

  const [fontsLoaded] = useFonts({DMSans_400Regular, DMSans_500Medium, DMSans_700Bold});

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <PassChange/> : <ActivityIndicator/>}
    </ThemeProvider>
  );
}
