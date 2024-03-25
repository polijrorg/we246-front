import * as S from './styles';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from '@components/Header1';
import Input from '@components/Input';
import PadLock from '@assets/PadLock.png'
import BackArrow from '@assets/BackArrow.png'
import GradientButton from '@components/GradientButton';

const NewPassword = () => (
    <>
    <Header title={'Nova Senha'} showBackButton image={BackArrow} />

    <S.Wrapper>
        <StatusBar style='dark' />

        <S.PadLockContainer>
            <S.PadLock source={PadLock} />
        </S.PadLockContainer>

        <S.TextContainer>
            <S.TitleContainer>
                <S.TitleLine>
                    <S.Title>Crie uma </S.Title>
                    <S.StyledTitle>nova senha </S.StyledTitle>
                    <S.Title>para sua</S.Title>
                </S.TitleLine>

                <S.SubTitleLine>
                    <S.Title>conta</S.Title>
                </S.SubTitleLine>
            </S.TitleContainer>

            <Input text={'Nova Senha'} showIcon={true} value={undefined} onChangeText={undefined} />
            <Input text={'Confirmar Senha'} showIcon={true} value={undefined} onChangeText={undefined} />

            <GradientButton />

        </S.TextContainer>

    </S.Wrapper>
    </>
);

export default NewPassword;