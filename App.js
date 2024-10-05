// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserProfile />
    </SafeAreaView>
  );
};

export default App;
