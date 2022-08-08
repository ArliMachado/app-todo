import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter'

import theme from './src/glogal/styles/theme';
import { Home } from './src/screens/Home';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


SplashScreen.preventAutoHideAsync();
export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }

  if (!fontsLoaded) {
    return null
  }

  return (
      <ThemeProvider theme={theme}>
        <StatusBar 
          barStyle="light-content"  
          backgroundColor="transparent" 
          translucent
        />
        <Home />
      </ThemeProvider>
    )
  }