import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import PasswordRecoveryScreen from './screens/PasswordRecoveryScreen';
import UserProfile from './screens/UserProfile'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
