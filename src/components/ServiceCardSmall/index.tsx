import * as S from './styles';
import React, { useState } from 'react';
import { TextProps } from 'react-native';

const ServiceCardSmall = ({ texto, imagem }) => {
  const getImage = () => {
    switch (imagem) {
      case 'eletricista':
        return require('public/icons/eletricista.png');
      case 'encanador':
        return require('public/icons/encanador.png');
      case 'faxina':
        return require('public/icons/faxina.png');
      case 'mais':
        return require('public/icons/mais.png');
      default:
        return null;
    }
  };
  return (
    <S.MainDiv>
      <S.Imagem source={getImage()} />
      <S.Text>{texto}</S.Text>
    </S.MainDiv>
  );
};

export default ServiceCardSmall;
