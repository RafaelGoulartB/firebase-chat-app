import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { theme } from './src/styles/theme'
import Routes from './src/routes'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <StatusBar style="light" />
    </PaperProvider>
  )
}
