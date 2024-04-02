import styled from 'styled-components/native';
import { TextInput, Image } from 'react-native';

export const MainDiv = styled.View`
  width: 358px;
  height: 34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 16px;
  margin-bottom: 16px;
  border-radius: 17px;
  background-color: #d9d9d9;
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: black;
`;

export const StyledImage = styled.Image`
  width: 16px;
  height: 16px;
`;

export const Text = styled.Text`
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;

export const AgendarCard = styled.Text`
  padding-top: 2px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
`;

export const AgendarButton = styled.TouchableOpacity`
  background-color: #ffff;
  border-radius: 15px;
  width: 80px;
  height: 25px;
`;
