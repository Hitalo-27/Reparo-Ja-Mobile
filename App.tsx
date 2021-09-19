import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useFonts} from 'expo-font';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import light from './src/theme/light';
import dark from './src/theme/dark';

import {Routes} from './src/routes';
import { ThemeProvider } from 'styled-components';

export default function App() {

  const [darkConst, setDarkConst] = useState(false);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return(
    
    <ThemeProvider theme={darkConst ? dark : light}>
      <StatusBar 
        barStyle={darkConst ? "dark-content" : "light-content"}
        backgroundColor={darkConst ? dark.colors.background : light.colors.background}

      />
        <Routes onDarkModeChange={() => setDarkConst(!darkConst)} darkModeValue={darkConst} />
    </ThemeProvider>
    
    
  )
}