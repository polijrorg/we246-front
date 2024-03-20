import * as S from './styles';
import Header from '@components/Header1';
import BackArrow from '@assets/BackArrow.png';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Input from '@components/Input'
import RegisterButton from '@assets/RegisterButton.png'
import LogoImage from '@assets/LogoImage.png'

const RegisterCompany = () => (
    <>
    <Header title={'Cadastro'} showBackButton image={BackArrow} />

    <S.Wrapper>
        <StatusBar style='dark' />

        <S.LogoContainer>
            <S.Logo source={LogoImage} /> 
        </S.LogoContainer>

        <S.TitleContainer>
            <S.Title>Crie sua conta e tenha</S.Title>
        </S.TitleContainer>

        <S.SubTitleContainer>
            <S.Title>acesso a </S.Title>
            <S.StyledText>todos os serviços!</S.StyledText>
        </S.SubTitleContainer>

        <S.InputContainer>

            <Input text={'Nome Completo'} showIcon={undefined} value={undefined} onChangeText={undefined} />

            <Input text={'CNPJ'} showIcon={undefined} value={undefined} onChangeText={undefined} />

            <Input text={'Número de Telefone'} showIcon={undefined} value={undefined} onChangeText={undefined} />

            <Input text={'Senha'} showIcon={true} value={undefined} onChangeText={undefined} />

            <S.SmallTextContainer>
                <S.SmallText>Li e concordo com os</S.SmallText>
                <S.SmallStyledText>Termos e Condições de Uso</S.SmallStyledText>
            </S.SmallTextContainer>

            <S.RegisterButton>
                <S.RegisterButtonImage source={RegisterButton} />
            </S.RegisterButton>

        </S.InputContainer>
        
        <S.SmallStyledTextContainer>    
            <S.SmallText>Já possui conta? </S.SmallText>
            <S.ClickContainer>
                <S.SmallStyledText>Conecte-se</S.SmallStyledText>
            </S.ClickContainer>
        </S.SmallStyledTextContainer>

    </S.Wrapper>
    </>
);

export default RegisterCompany;