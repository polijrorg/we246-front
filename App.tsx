import AppProvider from '@hooks/index';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/index';
import Login from '@screens/Login';
import Home from '@screens/Home';
import Inicial_Trabalhador from '@screens/Inicial_Trabalhador';
import Inicial_Usuario from '@screens/Inicial_Usuario';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Inicial_Usuario />
      </AppProvider>
    </NavigationContainer>
  );
}
