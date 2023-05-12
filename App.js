import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppIntro from './pages/AppIntro';
import Login from './pages/Login';
import Register from './pages/Register';
import GeneralOnboarding from './pages/GeneralOnboarding';
import SeekerOnboarding from './pages/SeekerOnboarding';
import ProviderOnboarding from './pages/ProviderOnboarding';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stacks/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  );
};
