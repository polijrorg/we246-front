import Header from '@components/Header1';
import * as S from './styles';
import BackArrow from '@assets/BackArrow.png'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Footer_user from '@components/Footer_user';
import AddressContainerComponent from '@components/AddressContainerComponent';


const Address = ({  }) => (
    <>
        <Header title='Endereços' showBackButton image={BackArrow} mainImage={undefined} />

        <S.Wrapper>
            <StatusBar style='dark' />

            <S.TextContainer>

                <S.TitleContainer>
                    <S.Title>Veja e Edite seus Endereços:</S.Title>
                </S.TitleContainer>

                <AddressContainerComponent showTitle styledtitle='Ativo' title='Av  Luciano Dagualberto - 476' subtitle='São Paulo, SP - Brasil' />
                <AddressContainerComponent styledtitle={''} title='Av Luciano   Dagualberto - 476' subtitle={'São Paulo, SP - Brasil'} />
                <AddressContainerComponent styledtitle={''} title='Av Luciano   Dagualberto - 476' subtitle='São Paulo, SP - Brasil' />

            </S.TextContainer>

            <S.StyledContainer>
                <S.StyledText>Adicionar Endereço</S.StyledText>
            </S.StyledContainer>

        </S.Wrapper>

        <Footer_user icon='perfil' />
    </>
);

export default Address;