import { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

function OnboardingIndividualForm() {
  const [preference, setPreference] = useState('');
  const [location, setLocation] = useState('');

  return (
    <View>
      <Text>Answer a few questions.</Text>
      <View>
        <Text>Do you prefer in person or virtual services?</Text>
        <Button
          title='In person!'
        />
        <Button
          title='Virtual!'
        />
        <Button
          title='Both!'
        />
      </View>
      <View>
        <Text>Do you have a gender preference for your providers?</Text>
        <TextInput
          onChangeText={setPreference}
          value={preference}
          placeholder="We'll tailor your matches to this."
        />
      </View>
      <View>
        <Text>For in person services, please provide your location.</Text>
        <TextInput
          onChangeText={setLocation}
          value={location}
          placeholder="Enter your city and state!"
        />
      </View>
    </View>
  )
}

export default OnboardingIndividualForm