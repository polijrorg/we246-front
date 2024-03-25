import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';

export const Wrapper = styled(View)`
    flex: 1;
    align-items: center;
    padding-top: 64px;
    background-color: ${({ theme }) => theme.colors.background};
    gap: 32px;
`;

export const LetterContainer = styled(View)``;

export const LetterImage = styled.Image``;

export const SubTitleContainer = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SubTitleTextLine1 = styled(Text)`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.highEmphasis};
`;

export const SubTitleContainer1 = styled(View)`
    display: flex;
    flex-direction: row;
`;

export const SubTitleStyledText1 = styled(Text)`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main};
`;

export const SubTitleContainer2 = styled(View)`
    display: flex;
    flex-direction: row;
`;

export const SubTitleTextLine2 = styled(Text)`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.highEmphasis};
`;

export const SubTitleStyledText2 = styled(Text)`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main};
`;

export const SubTitleStyledText3 = styled(Text)`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main};
`;