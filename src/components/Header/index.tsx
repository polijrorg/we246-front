import * as S from './styles';
import React from 'react';
import { TextProps } from 'react-native';

const Header = ({ title, showArrow, showLogo }) => (
  <S.MainDiv>
    {showArrow && <S.Icon source={require('public/icons/arrow.png')} />}
    <S.SubMainDiv>
      {showLogo && <S.LogoIcon source={require('public/icons/logo.png')} />}
      {!showLogo && <S.Title>{title}</S.Title>}
    </S.SubMainDiv>
  </S.MainDiv>
);

export default Header;
