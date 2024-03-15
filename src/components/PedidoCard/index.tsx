import * as S from './styles';
import React from 'react';
import Footer_worker from '@components/Footer_worker';
import Header from '@components/Header';
import Servico from '@components/Servico';
import UserButton from '@components/UserButton';

const PedidoCard = ({ nome, disponivel, nota }) => (
  <S.InfoDiv>
    <S.UserIcon source={require('public/icons/user.png')} />
    <S.InfoTextDiv>
      <S.Text>{nome}</S.Text>
      <S.Text>{disponivel}</S.Text>
      <S.GradeRow>
        <S.Grade>{nota}</S.Grade>
        <S.StarIcon source={require('public/icons/estrela_branca.png')} />
      </S.GradeRow>
    </S.InfoTextDiv>
  </S.InfoDiv>
);

export default PedidoCard;
