import styled, { css } from 'styled-components/native';
import { View, Text } from 'react-native';

export const Container = styled.TouchableOpacity`
  background-color: #e3266c;
  border-radius: 16px;
  display: flex;
  width: 157px;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 5px 7px;
`;

export const StyledText = styled(Text)`
  // font-family: 'Bw Modelica';
  font-size: 20px;
  color: #ffff;
`;


