import React from 'react';
import AppRoutes from '../routes/AppStack/app.routes';
import { useFonts } from 'expo-font';
import Home from '@screens/Home';
import DadosUsuario from '@screens/DadosUsuario';
import PerfilUsuario from '@screens/PerfilUsuario';
import PedidosUser from '@screens/PedidosUser';
import Pesquisa from '@screens/Pesquisa';

const Routes: React.FC = () => {
  return <PerfilUsuario />;
};

export default Routes;
