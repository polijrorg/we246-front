import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';
import React from 'react';

type Props = TouchableOpacityProps & {
    type?: S.ButtonTypeStyleProps;
    image: number;
    anotherimage: number;
}

export function Card({ image, anotherimage, type = 'PRIMARY', ...rest}: Props){
    return(
        <S.Container 
        type={type}
        {...rest}>
            <S.ImageContainer>
                <S.Imagem source={image} />
            </S.ImageContainer>
            
            <S.AnotherImageContainer>
                <S.AnotherImagem source={anotherimage}/>
            </S.AnotherImageContainer>

        </S.Container>
    )
}

export default Card;