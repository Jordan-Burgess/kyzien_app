import React from 'react'
import { Text, View, Button } from 'react-native'

function OnboardingServiceForm() {
  return (
    <View>
      <Text>Select all that apply.</Text>
      <Button
       title='Cosmetology'
      />
      <Button
       title='Fitness'
      />
      <Button
       title='Education'
      />
      <Button
       title='Holistic Care'
      />
    </View>
  )
}

export default OnboardingServiceForm