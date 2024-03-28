import styled from 'styled-components/native';
import {View, TextInput} from 'react-native';

export const Wrapper = styled(View)`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const PinContainer = styled(View)`
    width: 64px;
    height: 72px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.primary.main};
    border-radius: 8px;
`;

export const PinText = styled(TextInput)`
    font-size: 36px;
    font-weight: 700;
    align-self: center;
    padding: 16px;
`;