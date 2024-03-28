import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from '@components/Header1';
import { Card } from '@components/Card';
import Account from '@assets/Acount.png';
import Building from '@assets/Building.png';
import Guy from '@assets/Guy.png';
import ContaPessoal from '@assets/ContaPessoal.png';
import ContaEmpresarial from '@assets/ContaEmpresarial.png';
import PrestadordeServico from '@assets/PrestadordeServico.png';
import BackArrow from '@assets/BackArrow.png';

const AccountType = ({ navigation }) => (
  <>
    <Header title={'Tipo de Conta'} showBackButton image={BackArrow} />

    <S.Wrapper>
      <StatusBar style="dark" />

      <S.TitleContainer>
        <S.Title>Escolha seu</S.Title>
        <S.StyledText> tipo de conta</S.StyledText>
      </S.TitleContainer>

      <S.SubTitleContainer>
        <S.SubTitle>Qual desses tipos você se encaixa?</S.SubTitle>
      </S.SubTitleContainer>

      <S.CardContainer>
        <Card
          onPress={() => navigation.navigate('RegisterPerson')}
          image={Account}
          anotherimage={ContaPessoal}
        />
        <Card
          onPress={() => navigation.navigate('RegisterCompany')}
          image={Building}
          anotherimage={ContaEmpresarial}
        />
        <Card image={Guy} anotherimage={PrestadordeServico} />
      </S.CardContainer>
    </S.Wrapper>
  </>
);

export default AccountType;
