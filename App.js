import React, { useCallback, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
  SourceSansPro_600SemiBold,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro'
import { theme } from './src/styles'
import { Routes } from './src/routes'

export default function App() {
  //const [appIsReady, setAppIsReady] = useState(false)
  /*useEffect(() => {
    async function prepare() {
      let [fontsLoaded] = useFonts({
        SourceSansPro_400Regular,
        SourceSansPro_700Bold,
        SourceSansPro_600SemiBold,
        SourceSansPro_900Black,
      });
      setAppIsReady(fontsLoaded);
    }
    prepare();
  }, []);*/

  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
  });

  /*const rootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);*/

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
