import * as S from './styles';
import React, { useState } from 'react';
import Footer_user from '@components/Footer_user';
import PerfilComponent from '@components/PerfilComponent';
import Footer_worker from '@components/Footer_worker';

const PerfilPrestador = () => {
  return (
    <S.Wrapper>
      <S.ImagemHeader source={require('public/icons/HeaderPerfil.png')} />
      <S.CenterDiv>
        <S.IconDiv source={require('public/icons/user.png')}></S.IconDiv>
        <S.Nome>Nome</S.Nome>
        <S.GradeRow>
          <S.Nota>4,8</S.Nota>
          <S.StarIcon source={require('public/icons/estrela.png')} />
        </S.GradeRow>
      </S.CenterDiv>
      <PerfilComponent title="Meus dados" icon="dados" />
      <PerfilComponent title="Configurações" icon="configuracoes" />
      <PerfilComponent title="Endereços" icon="endereco" />
      <PerfilComponent title="Ajuda e Atendimento" icon="ajuda" />
      <PerfilComponent title="Carteira" icon="carteira" />
      <Footer_worker icon="perfil" />
    </S.Wrapper>
  );
};

export default PerfilPrestador;
