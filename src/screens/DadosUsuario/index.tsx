import * as S from './styles';
import React, { useState } from 'react';
import Footer_user from '@components/Footer_user';
import Header from '@components/Header';
import Input from '@components/Input';
import GradientButton from '@components/GradientButton';

const DadosUsuario = () => {
  const [cpf_cnpj, setCpfCnpj] = useState('');
  const [password, setPassword] = useState('');
  return (
    <S.Wrapper>
      <Header showArrow={true} showLogo={false} title="Meus Dados" />
      <S.PageTitle>Confira e Edite suas informações</S.PageTitle>
      <S.MainDiv>
        <Input
          text="Nome Completo"
          showIcon={false}
          value={cpf_cnpj}
          onChangeText={setCpfCnpj}
        />
        <Input
          text="CPF"
          showIcon={false}
          value={cpf_cnpj}
          onChangeText={setCpfCnpj}
        />
        <Input
          text="Número de Telefone"
          showIcon={false}
          value={cpf_cnpj}
          onChangeText={setCpfCnpj}
        />
        <Input
          text="E-mail"
          showIcon={false}
          value={cpf_cnpj}
          onChangeText={setCpfCnpj}
        />
        <Input
          text="Senha"
          showIcon={true}
          value={cpf_cnpj}
          onChangeText={setCpfCnpj}
        />
      </S.MainDiv>
      <GradientButton />
      <Footer_user icon="perfil" />
    </S.Wrapper>
  );
};

export default DadosUsuario;
