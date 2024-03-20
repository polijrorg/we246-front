import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import React from 'react';
import { AppScreensNav } from '@routes/AppStack/app.routes';

const Home = () => {
  const { navigate } = useNavigation<AppScreensNav>();

  return (
    <S.Wrapper>
      <S.MainDiv>
        <S.IconDiv>
          <S.Icon source={require('public/icons/logo_inicio.png')} />
        </S.IconDiv>
        <S.YellowTitleDiv>sua casa arrumada em</S.YellowTitleDiv>
        <S.WhiteTitleDiv>um clique!</S.WhiteTitleDiv>
      </S.MainDiv>
      <S.ButtonContainer>
        <S.YellowButton onPress={() => navigate('Login')}>
          <S.ButtonTextWhite>INICIAR</S.ButtonTextWhite>
        </S.YellowButton>
        <S.WhiteButton>
          <S.ButtonTextYellow>CADASTRE-SE AQUI!</S.ButtonTextYellow>
        </S.WhiteButton>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default Home;
