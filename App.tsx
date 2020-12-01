import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { theme } from './src/styles/theme'
import Routes from './src/routes'

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  )
}
