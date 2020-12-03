import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Chat from '../screens/Chat'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

export default Routes
