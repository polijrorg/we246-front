import AppProvider from '@hooks/index';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/index';
import AccountType from '@screens/AccountType';
import ChangePassword2 from '@screens/ChangePasswor2';
import ChangePassword1 from '@screens/ChangePassword1';
import Login from '@screens/Login';
import NewPassword from '@screens/NewPassword';
import RegisterCompany from '@screens/RegisterCompany';
import RegisterPerson from '@screens/RegisterPerson';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        {/* <Login /> */}
        <RegisterPerson />
        {/* <RegisterCompany /> */}
        {/* <AccountType /> */}
        {/* <ChangePassword1/> */}
        {/* <ChangePassword2 /> */}
        {/* <NewPassword />  */}
      </AppProvider>
    </NavigationContainer>
  );
}
