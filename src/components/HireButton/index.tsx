import * as S from './styles';
import React from 'react';
import HireButtonImage from '@assets/HireButton.png'

const HireButton = () => (
    <S.Button>
        <S.ButtonImage source = {HireButtonImage} />
    </S.Button>
);

export default HireButton;