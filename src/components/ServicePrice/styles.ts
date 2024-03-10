import styled, { css } from 'styled-components/native';
import { Image } from 'react-native';

interface ToggleCircleProps {
  toggled: boolean;
}

export const MainDiv = styled.View`
  width: 390px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  margin-top: 15px;
`;

export const InfoDiv = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextDiv = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Imagem = styled.Image`
  width: 60px;
  height: 60px;
  background-color: #d9d9d9;
  border-radius: 15px;
`;

export const Text = styled.Text`
  // font-family: 'Bw Modelica';
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
`;

export const Price = styled.Text`
  // font-family: 'Bw Modelica';
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
`;
