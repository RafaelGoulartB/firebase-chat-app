import React from 'react'
import { List } from 'react-native-paper'
import ChatItem from '../../components/chat-item'
import { ChatsItemFixures } from './constants'

const Home: React.FC = () => {
  return (
    <List.Section>
      <List.Subheader>Chats</List.Subheader>
      {ChatsItemFixures.map(item => (
        <ChatItem
          key={item.id}
          id={item.id}
          title={item.title}
          imageSrc={item.imageSrc}
        />
      ))}
    </List.Section>
  )
}

export default Home
