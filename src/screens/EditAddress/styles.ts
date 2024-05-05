import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';

export const Wrapper = styled(View)`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    gap: 24px;
`;

export const TitleContainer = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Title = styled(Text)`
    font-size: 20px;
    font-weight: 900;
`;

export const StyledContainer = styled(TouchableOpacity)`
    margin-top: 140px;
`;

export const StyledText = styled(Text)`
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 16px;
    font-weight: 900;
`;