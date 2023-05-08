import {useState} from 'react'
import { View, Text } from 'react-native'

function OnboardingInterestForm() {
  const [interest, setInterest] = useState('')
  return (
    <View>
      <Text>Choose up to 5 interests!</Text>
      <Text>Don't see what you're looking for? Search here!</Text>
      <TextInput
        onChangeText={setInterest}
        value={interest}
        placeholder='Browse a little!'
      />
    </View>
  )
}

export default OnboardingInterestForm