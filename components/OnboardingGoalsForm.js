import {useState} from 'react'
import { View, Text, Button } from 'react-native'

function OnboardingGoalsForm() {
  const [goal, setGoal] = useState('');
  const [priority, setPriority] = useState('');

  return (
    <View>
      <Text>Answer a few questions.</Text>
      <View>
        <Text>What is your main 'service' goal?</Text>
        <TextInput
          onChangeText={setGoal}
          value={goal}
          placeholder='Pick one!'
      />
      </View>
      <View>
        <Text>Which service is your top priority?</Text>
        <TextInput
          onChangeText={setPriority}
          value={priority}
          placeholder="You'll see this the most in your feed."
      />
      </View>
      <View>
        <Text>Do you want us to show you similar services based off your interest?</Text>
        <Button
          title='Yes!'
        />
        <Button
          title='Not Yet!'
        />
        <Button
          title='No...!'
        />
      </View>
    </View>
  )
}

export default OnboardingGoalsForm