import React from 'react'
import { Avatar, Divider, List } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

interface Props {
  id: string
  title: string
  imageSrc: string
}

const ChatItem: React.FC<Props> = ({ id, title, imageSrc }: Props) => {
  const navigation = useNavigation()

  return (
    <>
      <List.Item
        title={title}
        left={props => (
          <Avatar.Image
            size={38}
            source={{
              uri: imageSrc
            }}
          />
        )}
        onPress={() => navigation.navigate('Chat', { id })}
      />
      <Divider />
    </>
  )
}

export default ChatItem
