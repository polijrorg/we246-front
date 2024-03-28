import * as S from './styles';
import React from 'react';
import Footer_user from '@components/Footer_user';
import Header from '@components/Header';
import Busca from '@components/Busca';
import ServiceCard from '@components/ServiceCard';
import ServiceCardSmall from '@components/ServiceCardSmall';
import ServicePrice from '@components/ServicePrice';
import UserButton from '@components/UserButton';

const Inicial_Usuario = () => (
  <S.Wrapper>
    <S.WrapperCenter>
      <Header showArrow={false} showLogo={true} title="" />
      <Busca icone="lupa" />
      <S.ServiceDiv>
        <ServiceCard texto="Eletricista" imagem="eletricista" />
        <ServiceCard texto="Encanador" imagem="encanador" />
      </S.ServiceDiv>
      <S.ServiceDiv>
        <ServiceCardSmall texto="Faxina" imagem="faxina" />
        <ServiceCardSmall texto="" imagem="" />
        <ServiceCardSmall texto="" imagem="" />
        <ServiceCardSmall texto="ver mais" imagem="mais" />
      </S.ServiceDiv>
    </S.WrapperCenter>
    <S.ServiceImagesDiv>
      <S.ServiceImage source={require('public/icons/faxina_comum.png')} />
    </S.ServiceImagesDiv>
    <S.Texto>Serviços mais pedidos</S.Texto>
    <ServicePrice texto="Faxina" preco="R$:100,00 - R$:150,00" />
    <ServicePrice texto="Faxina" preco="R$:100,00 - R$:150,00" />
    <Footer_user icon="menu" />
  </S.Wrapper>
);

export default Inicial_Usuario;
