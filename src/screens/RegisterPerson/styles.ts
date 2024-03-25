import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';

// export const ScrollWrapper = styled(ScrollView)`
//     flex: 1;
//     min-height: 100%;
//     background-color: ${({ theme}) => theme.colors.background };
// `;

export const Wrapper = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme}) => theme.colors.background };
`;

export const LogoContainer = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 196px;
`;

export const Logo = styled.Image``;

export const TitleContainer = styled(View)`
    display: flex;
    flex-direction: row;
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
    display: flex;
    flex-direction: row;
    width: 358px;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
`;

export const SmallText = styled(Text)`
    color: ${({ theme}) => theme.colors.highEmphasis};
    font-weight: 700;
    font-size: 16px;
`;

export const SmallStyledText = styled(Text)`
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 700;
    font-size: 16px;
    text-decoration-line: underline;
`;

export const SmallTextContainer = styled(View)`
    display: flex;
`;

export const SmallStyledTextContainer = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const InputContainer = styled(View)`
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
`;

export const RegisterButtonImage = styled.Image``;

export const RegisterButton = styled(TouchableOpacity)``;

export const ClickContainer = styled(TouchableOpacity)``;