/*import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import React from 'react';
import Home from '@screens/Home';
import Login from '@screens/Login';
import Inicial_Trabalahdor from '@screens/Inicial_Trabalhador';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createNativeStackNavigator();

export type LandingPageScreensProps = {
  Login: undefined;
  Home: undefined;
  Inicial_Trabalhador: undefined;
};

export type AppScreensNav = NativeStackNavigationProp<LandingPageScreensProps>;

const AppRoutes: React.FC = () => (
  <AppStack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <AppStack.Group>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen
        name="Inicial_Trabalhador"
        component={Inicial_Trabalahdor}
      />
    </AppStack.Group>
  </AppStack.Navigator>
);

export default AppRoutes; */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import Login from '@screens/Login';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={Home}
      options={{ header: () => <></> }}
    />
    <AppStack.Screen
      name="Login"
      component={Login}
      options={{ header: () => <></> }}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
