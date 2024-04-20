import * as S from './styles';
import React from 'react-native';

type Props = {
    title: string;
}

export function SettingsCards({title}:Props){
    return(
        <S.Container>
            <S.TextContainer>
                <S.StyledText>{title}</S.StyledText>
            </S.TextContainer>
        </S.Container>
    )
}