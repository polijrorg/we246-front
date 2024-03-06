import * as S from './styles';
import React from 'react';

type Props = {
  showTitle?: boolean;
  title: string;
  image: number;
}

export function Header({ title, image, showTitle = false} : Props){
  return(
    <S.SafeContainer>
    <S.Container>
      <S.LeftLogoContainer>
        <S.LeftLogo source={image} />
      </S.LeftLogoContainer>
      {
        showTitle &&
        <S.Title>{title}</S.Title>
      }
    </S.Container>
    </S.SafeContainer>
  );
}

export default Header;
