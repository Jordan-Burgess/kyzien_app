import React from 'react'
import { View } from 'react-native'
import OnboardingServiceForm from '../components/OnboardingServiceForm'

export default function SeekerOnboarding() {
  return (
    <View>
      <OnboardingServiceForm/>
      <Button
        title='Holistic Care'
      />
    </View>
  )
}
