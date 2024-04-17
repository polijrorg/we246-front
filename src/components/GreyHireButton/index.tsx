import * as S from './styles';
import React from 'react';
import GreyHireButtonImage from '@assets/GreyHireButton.png'

const GreyHireButton = () => (
    <S.Button>
        <S.ButtonImage source = {GreyHireButtonImage} />
    </S.Button>
);

export default GreyHireButton;