import * as S from './styles';
import Header from '@components/Header1';
import BackArrow from '@assets/BackArrow.png';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Input from '@components/Input'
import RegisterButton from '@assets/RegisterButton.png'
import LogoImage from '@assets/LogoImage.png'
import UserService from '@services/UserService';

// const [cpf, setCpf] = useState('');
// const [phone, setPhone] = useState('');
// const [password, setPassword] = useState('');



const RegisterPerson = () => {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async () => {
        try {
            console.log(name);
            //  const user = await UserService.create({
            //     name: name,
            //     email: '',
            //     cpf_cnpj: cpf,
            //     phone: phone,
            //     address: '',
            //     password: password,
            //     accountType: 'personal',
            //  });
                const user = await UserService.create({
                    name: 'Velas',
                    email: '',
                    cpf_cnpj: '1234567890',
                    phone: '999999999',
                    address: 'sao paulo',
                    password: 'velasgenio',
                    accountType: 'personal',
                });
        console.log(user);
        alert('Cadastro Realizado');
        } catch (error) {
            alert(error.message);
        };
    };
    
    return(
    <>
    <Header title={'Cadastro'} showBackButton image={BackArrow} />

    {/* <S.ScrollWrapper> */}
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

            <Input text={'CPF'} showIcon={undefined} value={cpf} onChangeText={(newCpf) => setCpf(newCpf)} />

            <Input text={'Número de Telefone'} showIcon={undefined} value={phone} onChangeText={(newPhone) => setPhone(newPhone)} />

            <Input text={'Senha'} showIcon={true} value={password} onChangeText={(newPassword) => setPassword(newPassword)} />
            
            <S.SmallTextContainer>
                <S.SmallText>Li e concordo com os</S.SmallText>
                <S.SmallStyledText>Termos e Condições de Uso</S.SmallStyledText>
            </S.SmallTextContainer>

            <S.RegisterButton onPress={() => registerUser()}>
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
    {/* </S.ScrollWrapper> */}
    </>
    );
};

export default RegisterPerson;