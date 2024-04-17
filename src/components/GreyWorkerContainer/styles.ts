import styled from 'styled-components/native';
import {View, Text} from 'react-native';

export const Container = styled(View)`
    width: 360px;
    height: 112px;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.colors.surface};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const LeftContainer = styled(View)`
    /* background-color: aquamarine; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96px;
    width: fit-content;
    position: absolute;
    left: 16px;
    top: 8px;
`;

export const ImageContainer = styled(View)``;

export const WorkerImage = styled.Image`
    height: 56px;
    width: 56px;
`;

export const TextContainer = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Nota = styled(Text)`
    color: ${({ theme }) => theme.colors.opaco};
    font-size: 14px;
    font-weight: 700;
`;

export const Name = styled(Text)`
    color: ${({ theme }) => theme.colors.opaco};
    font-size: 16px;
    font-weight: 700;
`;

export const StarImage = styled.Image``;

export const RightContainer = styled(View)`
    display: flex;
    position: absolute;
    right: 34px;
    top: 8px;
`;

export const ButtonContainer = styled(View)`
    margin-top: 12px;
`;

export const RightText = styled(Text)`
    color: ${({ theme }) => theme.colors.opaco};
    font-size: 14px;
    font-weight: 700;
`;

export const StyledText = styled(Text)`
    color: ${({ theme }) => theme.colors.opaco};
    font-size: 14px;
    font-weight: 700;
`;

export const StyledTextContainer = styled(View)`
    margin-top: 8px;
`;