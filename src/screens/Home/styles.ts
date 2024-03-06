import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  gap: 214px;
  align-items: center;
  background: #e71f69;
`;

export const MainDiv = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 160px;
  width: 334px;
  height: 314px;
  gap: 4px;
`;

export const IconDiv = styled.View`
  display: flex;
  align-items: center;
`;

export const YellowTitleDiv = styled.Text`
  // font-family: 'Bw Modelica';
  font-size: 29px;
  text-align: center;
  color: #fbba00;
`;

export const WhiteTitleDiv = styled.Text`
  // font-family: 'Vag';
  font-size: 56px;
  text-align: center;
  color: #ffff;
`;

export const Icon = styled.Image`
  width: 231px;
  height: 216px;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 296px;
  height: 124px;
  gap: 16px;
`;

export const YellowButton = styled.TouchableOpacity`
  background-color: #fbba00;
  width: 296px;
  height: 54px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhiteButton = styled.TouchableOpacity`
  background-color: #ffff;
  width: 296px;
  height: 54px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonTextWhite = styled.Text`
  // font-family: 'Bw Modelica';
  font-size: 20px;
  text-align: center;
  color: #ffff;
`;

export const ButtonTextYellow = styled.Text`
  // font-family: 'Bw Modelica';
  font-size: 20px;
  text-align: center;
  color: #fbba00;
`;
