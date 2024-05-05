import * as S from './styles';
import React from 'react';

const EditAddressModal = () => (
    <S.BackgroundContainer>
        <S.StyledText>Tem certeza que você quer excluir esse endereço?</S.StyledText>
        
        <S.ButtonContainer>
            
            <S.NoButton>
                <S.ButtonText>NÃO</S.ButtonText>
            </S.NoButton>

            <S.YesButton>
                <S.ButtonText>SIM</S.ButtonText>
            </S.YesButton>

        </S.ButtonContainer>
        
    </S.BackgroundContainer>
);

export default EditAddressModal;