import * as S from './styles';
import React from 'react';
import { TextProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer_worker = ({ icon }) => {
  const navigation = useNavigation();
  return (
    <S.MainDiv>
      <S.FooterDiv onPress={() => navigation.navigate('IniciaTrabalhador')}>
        <S.Icon
          source={
            icon === 'menu'
              ? require('public/icons/inicio_colorido.png')
              : require('public/icons/inicio.png')
          }
        />
        <S.Text style={{ color: icon === 'menu' ? '#e3266c' : 'black' }}>
          Inicio
        </S.Text>
      </S.FooterDiv>
      <S.FooterDiv onPress={() => navigation.navigate('Pedidos')}>
        <S.Icon
          source={
            icon === 'servicos'
              ? require('public/icons/servicos_colorido.png')
              : require('public/icons/servicos.png')
          }
        />
        <S.Text style={{ color: icon === 'servicos' ? '#e3266c' : 'black' }}>
          Serviços
        </S.Text>
      </S.FooterDiv>
      <S.FooterDiv>
        <S.Icon
          source={
            icon === 'ganhos'
              ? require('public/icons/ganhos_colorido.png')
              : require('public/icons/ganhos.png')
          }
        />
        <S.Text style={{ color: icon === 'ganhos' ? '#e3266c' : 'black' }}>
          Ganhos
        </S.Text>
      </S.FooterDiv>
      <S.FooterDiv>
        <S.Icon
          source={
            icon === 'perfil'
              ? require('public/icons/perfil_colorido.png')
              : require('public/icons/perfil.png')
          }
        />
        <S.Text style={{ color: icon === 'perfil' ? '#e3266c' : 'black' }}>
          Perfil
        </S.Text>
      </S.FooterDiv>
    </S.MainDiv>
  );
};

export default Footer_worker;
