import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return ( 
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeScreen/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
