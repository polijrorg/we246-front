import * as S from './styles';
import React from 'react';
import HireButton from '@components/HireButton';
import Star from '@assets/Star.png'

type Props =  {
    nota: string;
    title: string;
    price: string;
    name: string;
    image: number;
}

export function WorkerContainer({ nota, title, price, name, image}: Props){
    return(
        <S.Container>
            <S.LeftContainer>
                <S.ImageContainer>
                    <S.WorkerImage source={image} />
                </S.ImageContainer>
                <S.Name>{name}</S.Name>
                <S.TextContainer>
                    <S.Nota>{nota}</S.Nota>
                    <S.StarImage source={Star} />
                </S.TextContainer>
            </S.LeftContainer>

            <S.RightContainer>
                <S.RightText>{title}</S.RightText>
                <S.RightText>{price}</S.RightText>
                <S.StyledText>Disponível agora</S.StyledText>
                <S.ButtonContainer>
                    <HireButton />
                </S.ButtonContainer>
            </S.RightContainer>
            
        </S.Container>
    )
}

export default WorkerContainer