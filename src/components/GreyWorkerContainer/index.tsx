import * as S from './styles';
import React from 'react';
import GreyHireButton from '@components/GreyHireButton';
import GreyStar from '@assets/GreyStar.png'

type Props =  {
    nota: string;
    title: string;
    price: string;
    name: string;
    image: number;
}

export function GreyWorkerContainer({ nota, title, price, name, image}: Props){
    return(
        <S.Container>
            <S.LeftContainer>
                <S.ImageContainer>
                    <S.WorkerImage source={image} />
                </S.ImageContainer>
                <S.Name>{name}</S.Name>
                <S.TextContainer>
                    <S.Nota>{nota}</S.Nota>
                    <S.StarImage source={GreyStar} />
                </S.TextContainer>
            </S.LeftContainer>

            <S.RightContainer>
                <S.RightText>{title}</S.RightText>
                <S.RightText>{price}</S.RightText>
                <S.StyledText>Indisponível no momento</S.StyledText>
                <S.ButtonContainer>
                    <GreyHireButton />
                </S.ButtonContainer>
            </S.RightContainer>
            
        </S.Container>
    )
}

export default GreyWorkerContainer