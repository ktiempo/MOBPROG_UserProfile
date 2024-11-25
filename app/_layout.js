import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Globally hide headers
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="SignupScreen" options={{ title: 'Sign Up' }} />
      <Stack.Screen name="UserProfile" options={{ title: 'User Profile' }} />
      <Stack.Screen name="PasswordRecoveryScreen" options={{ title: 'Password Recovery' }} />
    </Stack>
  );
};

export default Layout;
