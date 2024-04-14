import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  background: #f7f7f7;
`;

export const MainDiv = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 24px;
  gap: 24px;
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

export const StarIcon = styled.Image`
  width: 19px;
  height: 19px;
  margin-left: 4px;
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

export const InfoTextDiv = styled.View`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
`;

export const GradeRow = styled.View`
  display: flex;
  margin-left: 10px;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  margin-left: 10px;
  color: black;
`;

export const PageTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  margin-top: 16px;
  color: black;
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
