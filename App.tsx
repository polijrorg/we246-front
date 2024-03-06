import AppProvider from '@hooks/index';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/index';
import Login from '@screens/Login';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Login />
      </AppProvider>
    </NavigationContainer>
  );
}
