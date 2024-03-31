import * as S from './styles';
import React, { useState } from 'react';
import { TextProps } from 'react-native';

const ServiceCard = ({ texto, imagem }) => {
  const getImage = () => {
    switch (imagem) {
      case 'eletricista':
        return require('public/icons/eletricista.png');
      case 'encanador':
        return require('public/icons/encanador.png');
      case 'faxina':
        return require('public/icons/faxina.png');
      default:
        return null;
    }
  };
  return (
    <S.MainDiv>
      <S.Text>{texto}</S.Text>
      <S.Imagem source={getImage()} />
    </S.MainDiv>
  );
};

export default ServiceCard;
