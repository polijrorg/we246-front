import styled, { css } from 'styled-components/native';
import { Image } from 'react-native';

export const MainDiv = styled.View`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 24px;
  margin-top: 5px;
  background-color: #ffff;
`;

export const SubMainDiv = styled.View`
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 29px;
  height: 29px;
  margin-left: 30px;
`;

export const LogoIcon = styled.Image`
  width: 66px;
  height: 63px;
`;

export const Title = styled.Text`
  // font-family: 'Bw Modelica';
  font-size: 24px;
  font-weight: 700;
  line-height: 28.8px;
  margin-right: 100px;
`;
