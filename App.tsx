import AppProvider from '@hooks/index';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/index';
import Home from '@screens/Home';
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

/*import AppProvider from '@hooks/index';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/index';
// import Login from '@screens/Login';
// import Home from '@screens/Home';
// import Inicial_Trabalhador from '@screens/Inicial_Trabalhador';
import Pesquisa from '@screens/Pesquisa';
import Pedidos from '@screens/Pedidos';
//import Inicial_Usuario from '@screens/Inicial_Usuario';
import AcompanharPedidos from '@screens/AcompanharPedidos';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Pesquisa />
      </AppProvider>
    </NavigationContainer>
  );
}
*/
