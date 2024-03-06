import styled, { css } from 'styled-components/native';
import { Image } from 'react-native';

export const MainDiv = styled.View`
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  margin-top: 5px;
  background-color: #ffff;
`;

export const Icon = styled.Image`
  width: 19px;
  height: 19px;
`;

export const LogoIcon = styled.Image`
  width: 66px;
  height: 63px;
`;

export const Title = styled.Text`
  // font-family: 'Bw Modelica';
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
`;
