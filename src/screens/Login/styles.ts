import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  background: #f7f7f7;
`;

export const Icon = styled.Image`
  width: 200px;
  height: 192px;
`;

export const IconDiv = styled.View`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const MainDiv = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 374px;
  height: 332px;
  gap: 32px;
`;

export const TextRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.Text`
  // font-family: 'Bw Modelica';
  font-size: 32px;
  text-align: center;
  color: #e71f69;
`;

export const BlackText = styled.Text`
  // font-family: 'Bw Modelica';
  font-size: 16px;
  text-align: center;
  color: #000000;
`;

export const PinkText = styled.Text`
  // font-family: 'Bw Modelica';
  font-size: 16px;
  text-align: center;
  color: #e71f69;
  text-decoration-line: underline;
`;

export const RightText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  line-height: 19px;
  text-align: right;
  margin-left: 200px;
  color: #e71f69;
  text-decoration-line: underline;
`;
