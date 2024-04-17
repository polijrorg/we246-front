import * as S from './styles';
import React from 'react';

type Props = {
  showMainImage?: boolean;
  showBackButton?: boolean;
  title: string;
  image: number;
  mainImage: number;
}

export function Header({ title, image, mainImage, showBackButton = false, showMainImage = false} : Props){
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
      
      {
        showMainImage &&
        <S.MainImageContainer>
          <S.MainImage source={mainImage} />
        </S.MainImageContainer>
      }

    </S.Container>
    </S.SafeContainer>
  );
}

export default Header;
