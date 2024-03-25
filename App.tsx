import AppProvider from '@hooks/index';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/index';
import AccountType from '@screens/AccountType';
import ChangePassword2 from '@screens/ChangePasswor2';
import ChangePassword1 from '@screens/ChangePassword1';
import Login from '@screens/Login';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}
