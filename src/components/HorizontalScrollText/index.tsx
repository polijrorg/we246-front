import * as S from './styles';
import React from 'react';

const HorizontalScrollText = ({ onPressFunc, title }) => (
  <S.Container onPress = {onPressFunc}>
    <S.StyledText>{title}</S.StyledText>
  </S.Container>
);

export default HorizontalScrollText;
