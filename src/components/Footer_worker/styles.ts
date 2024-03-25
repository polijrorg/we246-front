import styled, { css } from 'styled-components/native';
import { Image } from 'react-native';

export const MainDiv = styled.View`
  width: 100%;
  height: 82px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 38px;
  padding-right: 38px;
  justify-content: space-between;
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  background-color: #ffff;
`;

export const FooterDiv = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  text-align: left;
`;
