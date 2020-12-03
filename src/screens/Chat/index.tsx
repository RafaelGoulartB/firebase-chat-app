import React from 'react'
import { Text } from 'react-native'

type Props = {
  route: any
}

const Chat: React.FC<Props> = ({ route }: Props) => {
  const { id } = route.params

  return <Text>{id}</Text>
}

export default Chat
