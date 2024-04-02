import * as S from './styles';
import React, { useState } from 'react';
import { TextProps } from 'react-native';

const ServiceCard = ({ texto, image }) => {
  return (
    <S.MainDiv>
      <S.Text>{texto}</S.Text>
      <S.Imagem source={{ uri: image }} />
    </S.MainDiv>
  );
};

export default ServiceCard;
