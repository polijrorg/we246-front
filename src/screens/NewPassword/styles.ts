import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';

export const Wrapper = styled(View)`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const PadLockContainer = styled(View)`
    background-color: ${({ theme }) => theme.colors.primary.background};
    padding: 64px 0px;
`;

export const PadLock = styled.Image``;

export const TitleLine = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 358px;
`;
export const TextContainer = styled(View)`
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 40px;
`;

export const TitleContainer = styled(View)``;

export const SubTitleLine = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 358px;
`;

export const Title = styled(Text)`
    font-size: 20px;
    font-weight: 700;
`;

export const StyledTitle = styled(Text)`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main};
`;