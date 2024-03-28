import * as S from './styles';
import React from 'react';
import Footer_user from '@components/Footer_user';
import Header from '@components/Header';
import PedidoCard from '@components/PedidoCard';
import UserButton from '@components/UserButton';

const AcompanharPedidosUser = () => (
  <S.Wrapper>
    <Header showArrow={false} showLogo={true} title="" />
    <S.PageTitle>DETALHES DO PEDIDO</S.PageTitle>
    <S.Imagem source={require('public/icons/mapa.png')} />
    <S.RowDiv>
      <S.Row backgroundColor="#E71F69"></S.Row>
      <S.Row backgroundColor="#E71F69"></S.Row>
      <S.Row backgroundColor="#D9D9D9"></S.Row>
    </S.RowDiv>
    <S.StatusDiv>
      <S.Icon source={require('public/icons/check.png')}></S.Icon>
      <S.Status>O Profissional está a caminho </S.Status>
    </S.StatusDiv>
    <S.ServiceDiv>
      <S.InfoDiv>
        <S.UserIcon />
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
    <S.ServiceDetail>
      <S.ServiceTitle>
        <S.ServiceImage></S.ServiceImage>
        <S.Text>Faxina</S.Text>
      </S.ServiceTitle>
      <S.Text>Resumo dos valores</S.Text>
      <S.ServiceRow>
        <S.Text>Faxina comum</S.Text>
        <S.Text>R$150,00</S.Text>
      </S.ServiceRow>
      <S.ServiceRow>
        <S.Text>Total:</S.Text>
        <S.Text>R$150,00</S.Text>
      </S.ServiceRow>
      <S.Text>Rua Abraão Melo Morais, 1234</S.Text>
    </S.ServiceDetail>
    <Footer_user icon="pedidos" />
  </S.Wrapper>
);

export default AcompanharPedidosUser;
