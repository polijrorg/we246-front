import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import Login from '@screens/Login';
import Inicial_Trabalhador from '@screens/Inicial_Trabalhador';
import Inicial_Usuario from '@screens/Inicial_Usuario';
import Pesquisa from '@screens/Pesquisa';
import Pedidos from '@screens/Pedidos';


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
    <AppStack.Screen
      name="InicialUsuario"
      component={Inicial_Usuario}
      options={{ header: () => <></> }}
    />
    <AppStack.Screen
      name="IniciaTrabalhador"
      component={Inicial_Trabalhador}
      options={{ header: () => <></> }}
    />
    <AppStack.Screen
      name="Pesquisa"
      component={Pesquisa}
      options={{ header: () => <></> }}
    />
    <AppStack.Screen
      name="Pedidos"
      component={Pedidos}
      options={{ header: () => <></> }}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
