import React from 'react';
import * as S from './styles';
import { MainDiv, Text, StyledImage, StyledTextInput } from './styles';

const Busca = ({ icone }) => {
  return (
    <S.MainDiv>
      <S.StyledTextInput
        placeholder="De qual serviço precisa?"
        placeholderTextColor="black"
      />
      {icone === 'lupa' && (
        <S.StyledImage source={require('public/icons/pesquisa.png')} />
      )}
      {icone === 'agendar' && <S.AgendarCard>Agendar</S.AgendarCard>}
    </S.MainDiv>
  );
};

export default Busca;
