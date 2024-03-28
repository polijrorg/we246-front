import * as S from './styles';
import React from 'react';

type Props = {
  showBackButton?: boolean;
  title: string;
  image: number;
}

export function Header({ title, image, showBackButton = false} : Props){
  return(
    <S.SafeContainer>
    <S.Container>
      {
       showBackButton &&
        <S.LeftLogoContainer>
          <S.LeftLogo source={image} />
        </S.LeftLogoContainer>
      }
      
      <S.Title>{title}</S.Title>
      
    </S.Container>
    </S.SafeContainer>
  );
}

export default Header;
