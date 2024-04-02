import React, { useState } from 'react';
import * as S from './styles';
import { MainDiv, Text, StyledImage, StyledTextInput } from './styles';

const Busca = ({ icone, onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    onInputChange(inputValue);
    // console.log(inputValue);
  };
  return (
    <S.MainDiv>
      <S.StyledTextInput
        placeholder="De qual serviço precisa?"
        placeholderTextColor="black"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      {icone === 'lupa' && (
        <S.StyledImage source={require('public/icons/pesquisa.png')} />
      )}
      {icone === 'agendar' && (
        <S.AgendarButton onPress={handleClick}>
          <S.AgendarCard>Agendar</S.AgendarCard>
        </S.AgendarButton>
      )}
    </S.MainDiv>
  );
};

export default Busca;
