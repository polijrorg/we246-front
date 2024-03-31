import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import * as S from './styles';

const Input = ({ text, showIcon, value, onChangeText }) => {
  const [showPassword, setShowPassword] = useState(showIcon? false : true);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.MainDiv>
      <S.TextInput
        placeholder={text}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}
      />
      {showIcon && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <S.Icon
            source={
              showPassword
                ? require('public/icons/Eye_off.png')
                : require('public/icons/Eye_off.png')
            }
          />
        </TouchableOpacity>
      )}
    </S.MainDiv>
  );
};

export default Input;
