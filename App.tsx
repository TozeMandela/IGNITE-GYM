
import { View, ActivityIndicator, StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Home } from '@screens/home/Home';



export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold});
  return (
    <>
      <StatusBar 
        barStyle={'light-content'}
        translucent
        backgroundColor='transparent'
      
      />
      {fontsLoader ? <Home />: <ActivityIndicator/>}

    </>
  );
}   


