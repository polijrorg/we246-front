import styled from 'styled-components';
import { TouchableOpacity, View, Text } from 'react-native';

export const BackgroundContainer = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 289px;
    height: 96px;
    background-color: ${({ theme }) => theme.colors.surface};
    padding: 16px;
    border-radius: 16px;
    gap: 16px;
`;

export const StyledText = styled(Text)`
    font-size: 16px;
    font-weight: 700;
`;

export const ButtonContainer = styled(View)`
    display: flex;
    flex-direction: row;
    gap: 12px;
`;

export const YesButton = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.secondary.main};
    height: 32px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
`;

export const NoButton = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme}) => theme.colors.secondary.main};
    height: 32px;
    border: 2px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled(Text)`
    font-size: 16px;
    font-weight: 700;
    text-transform: capitalize;
`;