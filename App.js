import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppIntro from './pages/AppIntro';
import Login from './pages/Login';
import Register from './pages/Register';
import GeneralOnboarding from './pages/GeneralOnboarding';
import SeekerOnboarding from './pages/SeekerOnboarding';
import ProviderOnboarding from './pages/ProviderOnboarding';

export default function App() {
  return (
    <GeneralOnboarding/>
  );
};
