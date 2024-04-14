import * as S from './styles';
import React from 'react';

const PerfilComponent = ({ icon, title }) => {
  let iconSource;

  if (icon === 'dados') {
    iconSource = require('public/icons/dados.png');
  } else if (icon === 'configuracoes') {
    iconSource = require('public/icons/configuracoes.png');
  } else if (icon === 'endereco') {
    iconSource = require('public/icons/endereco.png');
  } else if (icon === 'ajuda') {
    iconSource = require('public/icons/ajuda.png');
  } else if (icon === 'carteira') {
    iconSource = require('public/icons/carteira.png');
  }

  return (
    <S.InfoDiv>
      <S.InfoDivLeft>
        <S.Icon source={iconSource} />
        <S.Title>{title}</S.Title>
      </S.InfoDivLeft>
      <S.InfoDivRight>
        <S.Icon source={require('public/icons/Arrow_right.png')}></S.Icon>
      </S.InfoDivRight>
    </S.InfoDiv>
  );
};

export default PerfilComponent;
