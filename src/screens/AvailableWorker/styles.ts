import { View } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    margin: 16px 0px;
`;

export const StyledScrollView = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
      alignItems: 'center',
      gap: '8px',
    },
  }))``;