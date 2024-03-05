import * as S from './styles';
import React from 'react';

const Button = ({ onPressFunc, title }) => (
  <S.ButtonContainer onPress={onPressFunc}>
    <S.Title>{title}</S.Title>
  </S.ButtonContainer>
);

export default Button;
