import * as S from './styles';
import Header from '@components/Header1';
import BackArrow from '@assets/BackArrow.png';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Input from '@components/Input'
import RegisterButton from '@assets/RegisterButton.png'
import LogoImage from '@assets/LogoImage.png'
import UserService from '@services/UserService';

const RegisterCompany = () => {
    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const registerCompany = async () => {
        try {
            const company = await UserService.create({
                name: name,
                email: '',
                cpf_cnpj: cnpj,
                phone: phone,
                address: 'address',
                password: password,
                accountType: 'company'
            });
        } catch (error) {
            alert(error.message);
        };
    };

    return(
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

            <Input text={'Nome Completo'} showIcon={undefined} value={name} onChangeText={(newName) => setName(newName)} />

            <Input text={'CNPJ'} showIcon={undefined} value={cnpj} onChangeText={(newCnpj) => setCnpj(newCnpj)} />

            <Input text={'Número de Telefone'} showIcon={undefined} value={phone} onChangeText={(newPhone) => setPhone(newPhone)} />

            <Input text={'Senha'} showIcon={true} value={password} onChangeText={(newPassword) => setPassword(newPassword)} />

            <S.SmallTextContainer>
                <S.SmallText>Li e concordo com os</S.SmallText>
                <S.SmallStyledText>Termos e Condições de Uso</S.SmallStyledText>
            </S.SmallTextContainer>

            <S.RegisterButton onPress={() => registerCompany()}>
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
};

export default RegisterCompany;