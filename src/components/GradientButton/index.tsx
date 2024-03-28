import * as S from './styles';
import React from 'react';
import ButtonImage from '@assets/RegisterButton.png';

const GradientButton = ({ onPressFunc }) => (
  <S.Button onPress={onPressFunc}>
    <S.ButtonImage source={ButtonImage} />
  </S.Button>
);

export default GradientButton;
