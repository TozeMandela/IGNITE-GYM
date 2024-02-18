import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';


import { Loader } from '@components/Loader/Loader';


import { THEME } from './src/themes';
import { Routes } from '@routes/index';


export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle={'light-content'}
        translucent
        backgroundColor='transparent'
      
      /> 
      
      {fontsLoader ? <Routes /> : <Loader/>}

    </NativeBaseProvider>
  );
}   


