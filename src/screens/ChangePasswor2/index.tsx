import * as S from './styles';
import Header from '@components/Header1';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import BackArrow from '@assets/BackArrow.png';
import Letter from '@assets/Letter.png';
import Pin from '@components/Pin';
import GradientButton from '@components/GradientButton';

const ChangePassword2 = () => (
    <>
    <Header title={'Alterar Senha'} showBackButton image={BackArrow} />

    <S.Wrapper>
        <StatusBar style='dark' />

        <S.LetterContainer>
            <S.LetterImage source={Letter}/>
        </S.LetterContainer>

        <S.SubTitleContainer>
            <S.SubTitleContainer1>
                <S.SubTitleTextLine1>Insira abaixo os  </S.SubTitleTextLine1>
                <S.SubTitleStyledText1>quatro dígitos</S.SubTitleStyledText1>
            </S.SubTitleContainer1>

            <S.SubTitleContainer2>
                <S.SubTitleTextLine2>enviados em seu </S.SubTitleTextLine2>
                <S.SubTitleStyledText2>endereço de</S.SubTitleStyledText2>
            </S.SubTitleContainer2>

            <S.SubTitleStyledText3>e-mail</S.SubTitleStyledText3>
        
        </S.SubTitleContainer>
            
            <Pin />

            <GradientButton />

    </S.Wrapper>
    </>

);

export default ChangePassword2;