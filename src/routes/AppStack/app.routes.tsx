import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import Login from '@screens/Login';
import Inicial_Trabalahdor from '@screens/Inicial_Trabalhador';


const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Login" component={Login} />
    <AppStack.Screen
      name="Inicial_Trabalhador"
      component={Inicial_Trabalahdor}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
