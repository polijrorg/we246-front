import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    margin: 16px 0px;
`;

export const HighlightContainer = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.mustard};
  padding: 2px 24px;
  width: 192px;
  margin-bottom: 10px;
`;

export const HighlightedText = styled(Text)`
  color: ${({ theme }) => theme.colors.surface};
  font-weight: 900;
  font-size: 16px;
`;

export const StyledScrollView = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
      alignItems: 'center',
      gap: '8px',
    },
  }))``;
 