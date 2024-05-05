import styled from 'styled-components';
import { TouchableOpacity, View, Text } from 'react-native';

export const BackgroundContainer = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 289px;
    height: 120px;
    background-color: ${({ theme }) => theme.colors.surface};
    padding: 16px;
    border-radius: 16px;
    gap: 16px;
`;

export const StyledText = styled(Text)`
    font-size: 16px;
    font-weight: 900;
`;

export const ButtonContainer = styled(View)`
    display: flex;
    flex-direction: row;
    gap: 12px;
`;

export const YesButton = styled(TouchableOpacity)`
    border-color: ${({ theme }) => theme.colors.mustard};
    border-width: 1px;
    height: 32px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    width: 100px;
`;

export const NoButton = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.mustard};
    height: 32px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    width: 100px;
`;

export const ButtonText = styled(Text)`
    font-size: 16px;
    font-weight: 900;
    /* text-transform: capitalize; */
`;