import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  background: #f7f7f7;
`;

export const WrapperContent = styled.View`
  display: flex;
  align-items: left;
  gap: 15px;
  background: #f7f7f7;
`;

export const MainDiv = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 160px;
  width: 334px;
  height: 314px;
  gap: 4px;
`;

export const IconDiv = styled.View`
  display: flex;
  align-items: center;
`;

export const Texto = styled.Text`
  font-size: 16px;
  margin-top: 16px;
  text-align: left;
  font-weight: 500;
  color: black;
`;

export const Imagem = styled.Image`
  width: 358px;
  height: 220px;
  border-radius: 15px;
`;

export const ServiceDiv = styled.View`
  display: flex;
  align-items: left;
  gap: 15px;
  margin-top: 16px;
  height: 300px;
  width: 358px;
  border-radius: 15px;
  background: #e71f69;
`;

export const SubText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
  text-align: left;
  color: #ffff;
`;

export const InfoTextDiv = styled.View`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
  color: #ffff;
`;

export const InfoDiv = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  padding-left: 16px;
`;

export const UserIcon = styled.Image`
  width: 57px;
  height: 57px;
`;
