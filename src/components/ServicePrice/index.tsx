import * as S from './styles';
import React, { useState } from 'react';
import { TextProps } from 'react-native';

const ServicePrice = ({ texto, preco }) => {
  return (
    <S.MainDiv>
      <S.InfoDiv>
        <S.Imagem></S.Imagem>
        <S.TextDiv>
          <S.Text>{texto}</S.Text>
          <S.Price>{preco}</S.Price>
        </S.TextDiv>
      </S.InfoDiv>
    </S.MainDiv>
  );
};

export default ServicePrice;
