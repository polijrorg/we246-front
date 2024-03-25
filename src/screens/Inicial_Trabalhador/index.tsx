import * as S from './styles';
import React from 'react';
import Footer_worker from '@components/Footer_worker';
import Header from '@components/Header';
import Servico from '@components/Servico';
import UserButton from '@components/UserButton';

const Inicial_Trabalhador = () => (
  <S.Wrapper>
    <Header showArrow={false} showLogo={true} title="" />
    <UserButton texto="João Augusto"></UserButton>
    <S.ServiceDiv>
      <S.Imagem source={require('public/icons/mapa.png')} />
      <S.InfoDiv>
        <S.UserIcon source={require('public/icons/user.png')} />
        <S.InfoTextDiv>
          <S.Text>PRÓXIMO SERVIÇO</S.Text>
          <S.SubText>Agora</S.SubText>
        </S.InfoTextDiv>
      </S.InfoDiv>
    </S.ServiceDiv>
    <S.WrapperContent>
      <S.Texto>Serviços disponíveis</S.Texto>
      <Servico texto="Faxina" />
      <Servico texto="Faxina" />
    </S.WrapperContent>
    <Footer_worker icon="menu" />
  </S.Wrapper>
);

export default Inicial_Trabalhador;
