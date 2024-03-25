import React from 'react';
import * as S from './styles';
import { MainDiv, Text, StyledImage, StyledTextInput } from './styles';

const Busca = () => {
  return (
    <S.MainDiv>
      <S.StyledTextInput
        placeholder="De qual serviço você precisa?"
        placeholderTextColor="black"
      />
      <S.StyledImage source={require('public/icons/pesquisa.png')} />
    </S.MainDiv>
  );
};

export default Busca;
