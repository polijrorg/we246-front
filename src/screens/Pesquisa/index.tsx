import * as S from './styles';
import React from 'react';
import Footer_user from '@components/Footer_user';
import Header from '@components/Header';
import Busca from '@components/Busca';
import ServiceCard from '@components/ServiceCard';
import ServiceCardSmall from '@components/ServiceCardSmall';
import ServicePrice from '@components/ServicePrice';
import UserButton from '@components/UserButton';

const Pesquisa = () => (
  <S.Wrapper>
    <S.WrapperCenter>
      <Header showArrow={false} showLogo={true} title="" />
      <Busca icone="agendar" />
      <S.ServiceDiv>
        <ServiceCard texto="Eletricista" imagem="eletricista" />
        <ServiceCard texto="Eletricista" imagem="eletricista" />
      </S.ServiceDiv>
      <S.ServiceDiv>
        <ServiceCard texto="Encanador" imagem="encanador" />
        <ServiceCard texto="Encanador" imagem="encanador" />
      </S.ServiceDiv>
      <S.ServiceDiv>
        <ServiceCard texto="Faxina" imagem="faxina" />
        <ServiceCard texto="Faxina" imagem="faxina" />
      </S.ServiceDiv>
    </S.WrapperCenter>
    <Footer_user icon="buscar" />
  </S.Wrapper>
);

export default Pesquisa;
