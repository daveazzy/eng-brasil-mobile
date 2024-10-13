import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';

import { DMSans_400Regular, DMSans_500Medium, DMSans_700Bold, useFonts } from "@expo-google-fonts/dm-sans";
import { ActivityIndicator } from "react-native";
import { SignIn } from './src/screens/signIn';
import { Register } from './src/screens/register';
import { PassRecovery } from './src/screens/passRecovery';
import { PassRecoveryToken } from './src/screens/passRecovery/indexToken';
import { PassChange } from './src/screens/passRecovery/PassChange';
import { Routes } from './src/screens/routes';
import { FavoritesProvider } from './src/contexts/favoritesContext';

export default function App() {

  const [fontsLoaded] = useFonts({DMSans_400Regular, DMSans_500Medium, DMSans_700Bold});

  return (
    <FavoritesProvider>
      <ThemeProvider theme={theme}>
        {fontsLoaded ? <Register/> : <ActivityIndicator/>}
      </ThemeProvider>
    </FavoritesProvider>
  );
}
