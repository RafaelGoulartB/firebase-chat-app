import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Provider as PaperProvider } from 'react-native-paper'
import { theme } from './src/styles/theme'
import { Text } from 'react-native'

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </PaperProvider>
  )
}
