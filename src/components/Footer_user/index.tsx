import * as S from './styles';
import React from 'react';
import { TextProps } from 'react-native';

const Footer_user = ({ icon }) => (
  <S.MainDiv>
    <S.Icon
      source={
        icon === 'menu'
          ? require('public/icons/inicio_colorido.png')
          : require('public/icons/inicio.png')
      }
    />
    <S.Icon
      source={
        icon === 'buscar'
          ? require('public/icons/buscar_colorido.png')
          : require('public/icons/buscar.png')
      }
    />
    <S.Icon
      source={
        icon === 'pedidos'
          ? require('public/icons/pedidos_colorido.png')
          : require('public/icons/pedidos.png')
      }
    />
    <S.Icon
      source={
        icon === 'perfil'
          ? require('public/icons/perfil_colorido.png')
          : require('public/icons/perfil.png')
      }
    />
  </S.MainDiv>
);

export default Footer_user;
