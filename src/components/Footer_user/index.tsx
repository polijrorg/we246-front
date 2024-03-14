import * as S from './styles';
import React from 'react';
import { TextProps } from 'react-native';

const Footer_user = ({ icon }) => (
  <S.MainDiv>
    <S.FooterDiv>
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
    <S.FooterDiv>
      <S.Icon
        source={
          icon === 'buscar'
            ? require('public/icons/buscar_colorido.png')
            : require('public/icons/search.png')
        }
      />
      <S.Text style={{ color: icon === 'buscar' ? '#e3266c' : 'black' }}>
        Buscar
      </S.Text>
    </S.FooterDiv>
    <S.FooterDiv>
      <S.Icon
        source={
          icon === 'ganhos'
            ? require('public/icons/pedidos_colorido.png')
            : require('public/icons/pedidos.png')
        }
      />
      <S.Text style={{ color: icon === 'ganhos' ? '#e3266c' : 'black' }}>
        Pedidos
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

export default Footer_user;
