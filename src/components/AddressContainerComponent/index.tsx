import * as S from './styles';
import React from 'react';
import AddressIcon from '@assets/AddressImage.png'

type Props = {
    styledtitle: string;
    showTitle?: boolean;
    title: string;
    subtitle: string;
}

const AddressContainerComponent = ({styledtitle, showTitle = false, title, subtitle}:Props) => (
    <S.Container>
        {
         showTitle &&   
            <S.StyledTitleContainer>
                <S.StyledTitle>{styledtitle}</S.StyledTitle>
            </S.StyledTitleContainer>
        }
        <S.AddressContainer>
            <S.AddressImageContainer>
                <S.AddressImage source = {AddressIcon} />
            </S.AddressImageContainer>

            <S.AddressTitleContainer>
                <S.AddressTitle>{title}</S.AddressTitle>
                <S.AddressSubTitle>{subtitle}</S.AddressSubTitle>
            </S.AddressTitleContainer>
        </S.AddressContainer>
    </S.Container>

)
;
export default AddressContainerComponent;