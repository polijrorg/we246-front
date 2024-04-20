import styled from 'styled-components/native';
import { View, Text, TouchableOpacity} from 'react-native';

export const Wrapper = styled(View)`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Click = styled(TouchableOpacity)`
    margin-top: 24px;
`;

export const StyledText = styled(Text)`
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 24px;
    font-weight: 700;
`;