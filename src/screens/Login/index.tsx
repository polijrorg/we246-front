import * as S from './styles';
import React, { useState } from 'react';
import UserService from '@services/UserService';
import Input from '@components/Input';
import Button from '@components/Button';
import Header from '@components/Header';

const Login = ({ navigation }) => {
  const [cpf_cnpj, setCpfCnpj] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const loginResponse = await UserService.login({ cpf_cnpj, password });
      if (typeof loginResponse === 'string') {
        console.error(loginResponse);
      } else {
        console.log('Login bem-sucedido');
        console.log('Usuário:', loginResponse.user.account_type);
        console.log('Token:', loginResponse.token);
        if (loginResponse.user.account_type === 'personal') {
          navigation.navigate('InicialUsuario');
        } else if (loginResponse.user.account_type === 'company') {
          navigation.navigate('IniciaTrabalhador');
        }
      }
    } catch (error) {
      console.error('Erro ao efetuar login:', error);
    }
  };

  return (
    <S.Wrapper>
      <Header title="Login" showArrow={false} showLogo={false} />
      <S.IconDiv>
        <S.Icon source={require('public/icons/logo_maior.png')} />
      </S.IconDiv>
      <S.MainDiv>
        <S.Title>Conecte-se</S.Title>
        <Input
          text="CPF/CNPJ"
          showIcon={false}
          value={cpf_cnpj}
          onChangeText={setCpfCnpj}
        />
        <Input
          text="Senha"
          showIcon={true}
          value={password}
          onChangeText={setPassword}
        />
        <S.RightText>ESQUECI MINHA SENHA</S.RightText>
        <Button onPressFunc={handleLogin} title="CONFIRMAR" />
        <S.TextRow>
          <S.BlackText>Não possui conta?</S.BlackText>
          <S.PinkText>Cadastre-se</S.PinkText>
        </S.TextRow>
      </S.MainDiv>
    </S.Wrapper>
  );
};

export default Login;
