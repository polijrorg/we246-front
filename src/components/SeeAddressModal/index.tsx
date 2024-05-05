import * as S from './styles';
import React from 'react';

const SeeAddressModal = () => (
    <S.BackgroundContainer>
        <S.StyledText>Ver endereço?</S.StyledText>
        
        <S.ButtonContainer>
            
            <S.NoButton>
                <S.ButtonText>Selecionar</S.ButtonText>
            </S.NoButton>

            <S.YesButton>
                <S.ButtonText>Editar</S.ButtonText>
            </S.YesButton>

        </S.ButtonContainer>
        
    </S.BackgroundContainer>
);

export default SeeAddressModal;