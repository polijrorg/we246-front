import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import Login from '@screens/Login';
import Inicial_Trabalhador from '@screens/Inicial_Trabalhador';
import Inicial_Usuario from '@screens/Inicial_Usuario';
import Pesquisa from '@screens/Pesquisa';
import Pedidos from '@screens/Pedidos';
import PedidosUser from '@screens/PedidosUser';

import AccountType from '@screens/AccountType';
import RegisterCompany from '@screens/RegisterCompany';
import RegisterPerson from '@screens/RegisterPerson';
import ChangePassword1 from '@screens/ChangePassword1';
import ChangePassword2 from '@screens/ChangePasswor2';
import NewPassword from '@screens/NewPassword';

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
    <AppStack.Screen
      name="PedidosUser"
      component={PedidosUser}
      options={{ header: () => <></> }}
    />
    <AppStack.Screen
      name="AccountType"
      component={AccountType}
      options={{ header: () => <></> }}
    />
    <AppStack.Screen
      name="RegisterCompany"
      component={RegisterCompany}
      options={{ header: () => <></> }}
    />
    <AppStack.Screen
      name="RegisterPerson"
      component={RegisterPerson}
      options={{ header: () => <></> }}
    />
    <AppStack.Screen
      name="ChangePassword1"
      component={ChangePassword1}
      options={{ header: () => <></> }}
    />
    <AppStack.Screen
      name="ChangePassword2"
      component={ChangePassword2}
      options={{ header: () => <></> }}
    />
    <AppStack.Screen
      name="NewPassword"
      component={NewPassword}
      options={{ header: () => <></> }}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
