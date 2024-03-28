import * as S from './styles';
import React from 'react';
import Footer_user from '@components/Footer_user';
import Header from '@components/Header';
import PedidoCard from '@components/PedidoCard';
import UserButton from '@components/UserButton';

const PedidosUser = () => (
  <S.Wrapper>
    <Header showArrow={false} showLogo={true} title="" />
    <S.PageTitle>MEUS PEDIDOS</S.PageTitle>
    <S.ServiceDiv>
      <S.Imagem source={require('public/icons/mapa.png')} />
      <S.InfoDiv>
        <S.UserIcon source={require('public/icons/user.png')} />
        <S.InfoTextDiv>
          <S.Text>Luisa</S.Text>
          <S.Text>Agora</S.Text>
          <S.GradeRow>
            <S.Grade>4,8</S.Grade>
            <S.StarIcon source={require('public/icons/estrela.png')} />
          </S.GradeRow>
        </S.InfoTextDiv>
      </S.InfoDiv>
    </S.ServiceDiv>
    <S.WrapperContent>
      <PedidoCard nome="Luisa" disponivel="Agora" nota="4,8" />
      <PedidoCard nome="Luisa" disponivel="Agora" nota="4,8" />
      <PedidoCard nome="Luisa" disponivel="Agora" nota="4,8" />
    </S.WrapperContent>
    <Footer_user icon="pedidos" />
  </S.Wrapper>
);

export default PedidosUser;
