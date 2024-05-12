import * as S from './styles';
import React from 'react';
import WorkerContainer from '@components/WorkerContainer';
import WorkerImage from '@assets/WorkerImage.png';
import Header from '@components/Header1';
import Busca from '@components/Busca';
import Footer_user from '@components/Footer_user';
import GreyWorkerImage from '@assets/GreyWorkerImage.png';
import logo from '@assets/logo.png';
import BackArrow from '@assets/BackArrow.png';
import GreyWorkerContainer from '@components/GreyWorkerContainer';

const AvailableWorker = () => (
    <>
        <Header title='' showBackButton image={BackArrow} showMainImage mainImage={logo} />        
        
        
        <S.Wrapper>
            <Busca icone='lupa' />
            
            <S.HighlightContainer>
                <S.HighlightedText>RECOMENDADO!</S.HighlightedText>
            </S.HighlightContainer>

            <S.StyledScrollView>
                <WorkerContainer nota={'4.9'} title={'aaaaaaaaaaa'} price={'bbbbbbbbbbbbb'} name={'Leonardo'} image={WorkerImage}/>

                <WorkerContainer nota={'4.9'} title={'aaaaaaaaaaa'} price={'bbbbbbbbbbbbb'} name={'Leonardo'} image={WorkerImage}/>

                <WorkerContainer nota={'4.9'} title={'aaaaaaaaaaa'} price={'bbbbbbbbbbbbb'} name={'Leonardo'} image={WorkerImage}/>

                <WorkerContainer nota={'4.9'} title={'aaaaaaaaaaa'} price={'bbbbbbbbbbbbb'} name={'Leonardo'} image={WorkerImage}/>

                <GreyWorkerContainer nota={'4.9'} title={'aaaaaaaaaaa'} price={'bbbbbbbbbbbbb'} name={'Leonardo'} image={GreyWorkerImage}/> 

                <GreyWorkerContainer nota={'4.9'} title={'aaaaaaaaaaa'} price={'bbbbbbbbbbbbb'} name={'Leonardo'} image={GreyWorkerImage}/>

                <GreyWorkerContainer nota={'4.9'} title={'aaaaaaaaaaa'} price={'bbbbbbbbbbbbb'} name={'Leonardo'} image={GreyWorkerImage}/>
        
            </S.StyledScrollView>
        
        </S.Wrapper>
        
        <Footer_user icon='buscar' />

    </>
);

export default AvailableWorker;