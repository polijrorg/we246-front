import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background };
`;

export const TitleContainer = styled(View)`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 32px;
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.highEmphasis};
  font-weight: 700;
  font-size: 24px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: 700;
  font-size: 24px;
`;

export const SubTitleContainer = styled(View)`
  position: absolute;
  top: 60px;
`;

export const SubTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.highEmphasis};
  font-weight: 700;
  font-size: 20px;
`;

export const CardContainer = styled(View)`
  justify-content: center;
  align-items: center;
  gap: 32px;
`;
