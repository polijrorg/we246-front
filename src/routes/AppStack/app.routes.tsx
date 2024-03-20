import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import Login from '@screens/Login';

export type ScreenProps 

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Login" component={Login} />
  </AppStack.Navigator>
);

export default AppRoutes;
