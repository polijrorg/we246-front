import styled, { css } from 'styled-components/native';
import { Image } from 'react-native';

export const MainDiv = styled.View`
  width: 170px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 15px;
  background-color: #fbba00;
`;

export const Imagem = styled.Image`
  width: 70px;
  height: 70px;
  margin-top: 5px;
`;

export const Text = styled.Text`
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  padding: 16px;
`;
