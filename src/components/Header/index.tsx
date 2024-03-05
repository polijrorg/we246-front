import * as S from './styles';
import React from 'react';
import { TextProps } from 'react-native';

const Footer_user = ({ title, showArrow, showLogo }) => (
  <S.MainDiv>
    {showArrow && <S.Icon source={require('public/icons/arrow.png')} />}
    {showLogo && <S.LogoIcon source={require('public/icons/logo.png')} />}
    {!showLogo && <S.Title>{title}</S.Title>}
  </S.MainDiv>
);

export default Footer_user;
