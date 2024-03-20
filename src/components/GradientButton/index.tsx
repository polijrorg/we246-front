import * as S from './styles';
import React from 'react';
import ButtonImage from '@assets/RegisterButton.png'

const GradientButton = () => (
    <S.Button>
        <S.ButtonImage source = {ButtonImage} />
    </S.Button>
);

export default GradientButton;