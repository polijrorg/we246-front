import Header from '@components/Header1';
import * as S from './styles';
import BackArrow from '@assets/BackArrow.png'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Input from '@components/Input';
import GradientButton from '@components/GradientButton';
import Footer_user from '@components/Footer_user';
import SeeAddressModal from '@components/SeeAddressModal';
import EditAddressModal from '@components/EditAddressModal';

const EditAddress = () => (
    <>
        <Header title='Editar Endereço' showBackButton image={BackArrow} mainImage={undefined} />

        <S.Wrapper>
            <StatusBar style='dark' />

            <S.TextContainer>

                <S.TitleContainer>
                    <S.Title>Confira e Edite as Informações</S.Title>
                </S.TitleContainer>

                <Input text='CEP' showIcon={undefined} value={undefined} onChangeText=  {undefined} />
            
                <Input text='Estado' showIcon={undefined} value={undefined}     onChangeText={undefined} />
            
                <Input text='Cidade' showIcon={undefined} value={undefined}     onChangeText={undefined} />
            
                <Input text='Logradouro' showIcon={undefined} value={undefined}     onChangeText={undefined} />
            
                <Input text='Número' showIcon={undefined} value={undefined}     onChangeText={undefined} />
            
                <Input text='Complemento' showIcon={undefined} value={undefined}    onChangeText={undefined} />

                <GradientButton />

                {/* <SeeAddressModal /> */}
                {/* <EditAddressModal /> */}

            </S.TextContainer>

            <S.StyledContainer >
                <S.StyledText>Excluir Endereço</S.StyledText>
            </S.StyledContainer>

            <Footer_user icon='perfil' />

        </S.Wrapper>
    </>
);

export default EditAddress;