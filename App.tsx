import AppProvider from '@hooks/index';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/index';
import Address from '@screens/Address';
import AvailableWorker from '@screens/AvailableWorker';
import EditAddress from '@screens/EditAddress';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        {/* <Routes /> */}
        {/* <AvailableWorker /> */}
        <Address />
        {/* <EditAddress /> */}
      </AppProvider>
    </NavigationContainer>
  );
}
