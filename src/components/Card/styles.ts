import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props ={
    type:ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    height: 150px;
    width: 300px;
    background-color: ${({ theme }) =>theme.colors.surface};
    border-radius: 8px;
    padding: 0px 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-color: ${({ theme }) =>theme.colors.primary.main};
    border-width: 2px;
`;


export const ImageContainer = styled.View`
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    gap: 4px;
`;

export const Imagem = styled.Image``;

export const AnotherImagem = styled.Image``;

export const AnotherImageContainer = styled(View)``;