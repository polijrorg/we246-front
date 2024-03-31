import styled, { css } from 'styled-components/native';
import { Image } from 'react-native';

export const MainDiv = styled.View`
  width: 77px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  background-color: #fbba00;
`;

export const Imagem = styled.Image`
  width: 64px;
  height: 64px;
  margin-top: 5px;
`;

export const Text = styled.Text`
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  padding-bottom: 5px;
`;
