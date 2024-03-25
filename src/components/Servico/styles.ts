import styled, { css } from 'styled-components/native';
import { Image } from 'react-native';

interface ToggleCircleProps {
  toggled: boolean;
}

export const MainDiv = styled.View`
  width: 358px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-radius: 15px;
  background-color: #fbba00;
`;

export const InfoDiv = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Imagem = styled.Image`
  width: 60px;
  height: 60px;
  background-color: #d9d9d9;
  border-radius: 15px;
`;

export const LogoIcon = styled.Image`
  width: 66px;
  height: 63px;
`;

export const Text = styled.Text`
  // font-family: 'Bw Modelica';
  font-size: 15px;
  margin-left: 10px;
  text-align: center;
`;

export const ToggleBtn = styled.TouchableOpacity`
  background-color: #ddd;
  width: 51px;
  height: 21px;
  border-radius: 8px;
  justify-content: center;
  margin-left: auto;
  display: flex;
`;

export const ToggleCircle = styled.View<ToggleCircleProps>`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #f38bb1;
  margin-left: ${({ toggled }) => (toggled ? '22px' : '-5px')};
`;
