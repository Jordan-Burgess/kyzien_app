import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppIntro from '../pages/AppIntro';
import GeneralOnboarding from '../pages/GeneralOnboarding';
import Login from '../pages/Login';
import ProviderOnboarding from '../pages/ProviderOnboarding';
import Register from '../pages/Register';
import SeekerOnboarding from '../pages/SeekerOnboarding';
import OnboardingGoalsForm from '../components/OnboardingGoalsForm';
import OnboardingIndividualForm from '../components/OnboardingIndividualForm';
import OnboardingInterestForm from '../components/OnboardingInterestForm';
import OnboardingServiceForm from '../components/OnboardingServiceForm';



const Stack = createNativeStackNavigator();

const StackNavigator = ( props ) => {
    return (
      <Stack.Navigator screenOptions={ {headerShown: false }}>
          <Stack.Screen name="AppIntro" component={AppIntro} />
  
          <Stack.Group>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
          </Stack.Group>
        
        </Stack.Navigator>
    )
  }
  
  export default StackNavigator