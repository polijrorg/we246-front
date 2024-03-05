import * as S from './styles';
import React from 'react';
import { TextProps } from 'react-native';

const Footer_worker = ({ icon }) => (
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
        icon === 'servicos'
          ? require('public/icons/servicos_colorido.png')
          : require('public/icons/servicos.png')
      }
    />
    <S.Icon
      source={
        icon === 'ganhos'
          ? require('public/icons/ganhos_colorido.png')
          : require('public/icons/ganhos.png')
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

export default Footer_worker;
