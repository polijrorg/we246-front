import styled, { css } from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #e3266c;
  border-radius: 8px;
  display: flex;
  width: 225px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  // font-family: 'Bw Modelica';
  font-size: 20px;
  color: #ffff;
`;

export const HorizontalScrollContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    gap: '8px',
    display: 'flex',
    flexDirection: 'row'
  },
}))``;
