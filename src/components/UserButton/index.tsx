import * as S from './styles';
import React, { useState } from 'react';
import { TextProps } from 'react-native';

const UserButton = ({ texto }) => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };
  return (
    <S.MainDiv>
      <S.InfoDiv>
        <S.Imagem></S.Imagem>
        <S.InfoTextDiv>
          <S.Text>{texto}</S.Text>
          {toggled && <S.SubText>Em expediente</S.SubText>}
        </S.InfoTextDiv>
      </S.InfoDiv>
      <S.ToggleBtn onPress={handleToggle}>
        <S.ToggleCircle toggled={toggled} />
      </S.ToggleBtn>
    </S.MainDiv>
  );
};

export default UserButton;
