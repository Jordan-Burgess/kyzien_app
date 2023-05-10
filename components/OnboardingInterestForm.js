import {useState} from 'react'
import { View, Text } from 'react-native'

services = {
  cosmotology : [
    'Electrologist', 'Celebrity MUA', 'Nail Tech', 'Hairstylist',
    'Barber', 'Makeup Artist', 'Beauty Writer', 'Fashion Show Stylist',
    'Lash Tech', 'Aesthetician', 'Braider', 'Loctician',
  ],
  fitness : [
    'Tai Chi', 'Calisthenics', 'MMA', 'Strength and Conditioning',
    'Pilates Instructor', 'USAW', 'Boxing Coach', 'Personal Trainer',
    'Golf Specialist', 'Crossfit Trainer',
  ],
  education : [
    'Fitness', 'Health', 'Nutrition',
  ],
  holistic : [
    'Alignment', 'Hot Yoga Classes', 'Massage Therapist', 'Herbalist',
    'Acupuncturist', 'Reflexologist', 'Ayervedic Physitian', 'Prosthetist',
    'Physical Therapist', 'Dietician',
  ],
}


function OnboardingInterestForm({service}) {
  const [interest, setInterest] = useState('')
  return (
    <View>
      <Text>Excellent! Let's tailor your {service} experience to you!</Text>
      <Text>Choose up to 5 interests!</Text>
      <Text>Don't see what you're looking for? Search here!</Text>
      <TextInput
        onChangeText={setInterest}
        value={interest}
        placeholder='Browse a little!'
      />
      <Button
       title='Go Back'
      />
      <Button
       title='Continue'
      />
    </View>
  )
}

export default OnboardingInterestForm