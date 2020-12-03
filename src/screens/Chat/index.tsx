import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'

interface Props {
  route: any
}

const Chat: React.FC<Props> = ({ route }: Props) => {
  const [messages, setMessages] = useState<IMessage[]>([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any'
        }
      }
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages)
    )
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
        name: 'Rafael',
        avatar:
          'https://images.generated.photos/mdC04J0sVP2l9MmOBnZG_NxpCMIsKLN8FhmqwUnXKgI/rs:fit:512:512/wm:1:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NTc3MzYuanBn.jpg'
      }}
      infiniteScroll
    />
  )
}

export default Chat
