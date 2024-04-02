import * as S from './styles';
import React, { useEffect, useState } from 'react';
import Footer_user from '@components/Footer_user';
import Header from '@components/Header';
import Busca from '@components/Busca';
import ServiceCard from '@components/ServiceCard';
import SearchService from '@services/SearchService';
import Service from '@interfaces/Service';

const Pesquisa = () => {
  const [category, setCategory] = useState<Service[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [filteredService, setFilteredService] = useState<Service | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categorysData: Service[] = await SearchService.findAllCategory();
        const categoryName: Service =
          await SearchService.findCategoryByName(inputValue);
        console.log(categorysData);
        console.log(categoryName);
        setCategory(categorysData);
        setFilteredService(categoryName);
      } catch (error) {
        console.error('Erro ao buscar dados de vendedores:', error);
      }
    };

    fetchData();
  }, [inputValue]);

  const handleInputChange = (value) => {
    setInputValue(value);
    console.log(value);
  };

  return (
    <S.Wrapper>
      <S.WrapperCenter>
        <Header showArrow={false} showLogo={true} title="" />
        <Busca icone="agendar" onInputChange={handleInputChange} />
        <S.ServiceDiv>
          {filteredService ? (
            <ServiceCard
              texto={filteredService.name}
              image={filteredService.img_card}
            />
          ) : (
            category.map((item, index) => (
              <ServiceCard
                texto={item.name}
                image={item.img_card}
                key={index}
              />
            ))
          )}
        </S.ServiceDiv>
      </S.WrapperCenter>
      <Footer_user icon="buscar" />
    </S.Wrapper>
  );
};

export default Pesquisa;
