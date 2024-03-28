import * as S from './styles';
import Input from '@components/Input';
import RegisterButton from '@assets/RegisterButton.png'
import Header from '@components/Header1';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import BackArrow from '@assets/BackArrow.png'
import GradientButton from '@components/GradientButton';

const ChangePassword1 = () => (
    <>
    <Header title={'Alterar Senha'} showBackButton image={BackArrow} />

    <S.Wrapper>
        <StatusBar style='dark' />

        <S.TitleContainer>
            <S.Title>Redefina sua senha</S.Title>
        </S.TitleContainer>

        <S.SubTitleContainer>
            <S.SubTitleContainer1>
                <S.SubTitleTextLine1>Escreva seu </S.SubTitleTextLine1>
                <S.SubTitleStyledText1>número de telefone</S.SubTitleStyledText1>
            </S.SubTitleContainer1>

            <S.SubTitleContainer2>
                <S.SubTitleTextLine2>para receber um </S.SubTitleTextLine2>
                <S.SubTitleStyledText2>código de</S.SubTitleStyledText2>
            </S.SubTitleContainer2>

            <S.SubTitleStyledText3>verificação</S.SubTitleStyledText3>
        
        </S.SubTitleContainer>
            
            <Input text={'Número de Telefone'} showIcon={undefined} value={undefined} onChangeText={undefined} />

            <GradientButton />

    </S.Wrapper>
    </>

);

export default ChangePassword1;