import {useState} from 'react'
import {View, Text, Image, TextInput, Button} from 'react-native'

function GeneralOnboarding() {
  const [name, setName] = useState('')
  const [state, setState] = useState('')

  return (
    <View>
      <Text>Welcome to KYZIEN, Name</Text>
      <Image source='asd'/>
      <Text>Add a Profile Picture!</Text>
      <TextInput
        onChangeText={setName}
        value={name}
        placeholder="What's your name?"
      />
      <TextInput
        onChangeText={setState}
        value={state}
        placeholder='Choose your state'
      />
      <Text>Are you a provider or a seeker?</Text>
      <Button
        title="Provider"
      />
      <Button
        title="Seeker"
      />
      <Button
        title="Continue"
      />
    </View>
  )
}

export default GeneralOnboarding