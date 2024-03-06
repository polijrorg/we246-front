import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components/native';

export const SafeContainer = styled(SafeAreaView)`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.surface};
`;

export const Container = styled(View)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
height: 63px;
background-color: ${({ theme }) => theme.colors.surface};

`;

export const LeftLogo = styled.Image`
`;

export const LeftLogoContainer = styled(TouchableOpacity)`
    position: absolute;
    top: 16px;
    left: 32px;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: 700;
`;

