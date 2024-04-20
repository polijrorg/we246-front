import styled from 'styled-components/native';
import { TouchableOpacity, Text, View} from 'react-native';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 62px;
    border-color: ${({ theme }) => theme.colors.mediumEmphasis};
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom-width: 1px;
    border-top-width: 1px;
`;

export const TextContainer = styled(View)`
    background-color: none;
`;

export const StyledText = styled(Text)`
    font-size: 24px;
    font-weight: 700;
    position: absolute;
    left: 24px;
    top: 16px;
`;