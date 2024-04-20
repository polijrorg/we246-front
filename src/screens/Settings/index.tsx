import Header from '@components/Header1';
import * as S from './styles';
import React from 'react-native';
import BackArrow from '@assets/BackArrow.png';
import Footer_user from '@components/Footer_user';
import { StatusBar } from 'expo-status-bar';
import {SettingsCards} from '@components/SettingsCards';
import { FirstSettingsCards } from '@components/FirstSettingsCard';

const Settings = () => (
    <>
        <Header title='Configurações' showBackButton image={BackArrow} mainImage={undefined} />

        <S.Wrapper>
            <StatusBar style='dark' />
            
            <FirstSettingsCards title='Gerenciar Notificações' />
            <SettingsCards title='Termos e Condições de Uso' />

            <S.Click>
            <S.StyledText>Sair</S.StyledText>
            </S.Click>

        </S.Wrapper>

        <Footer_user icon='perfil' />
    </>
);

export default Settings;