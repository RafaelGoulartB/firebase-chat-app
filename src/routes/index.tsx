import React from 'react'
import { Button, Dialog, Portal } from 'react-native-paper'

const Routes: React.FC = () => {
  const [visible, setVisible] = React.useState(false)
  const showDialog = () => setVisible(true)
  const hideDialog = () => setVisible(false)

  return (
    <>
      <Button onPress={showDialog}>Say Hello!</Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Hello World</Dialog.Title>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  )
}

export default Routes
