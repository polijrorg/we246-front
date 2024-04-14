import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  background: #f7f7f7;
`;

export const CenterDiv = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -48px;
`;

export const Nome = styled.Text`
  font-size: 32px;
  margin-top: 10px;
  text-align: left;
  font-weight: 700;
  color: #e71f69;
`;

export const Nota = styled.Text`
  font-size: 16px;
  text-align: left;
  font-weight: 700;
  color: black;
`;

export const IconDiv = styled.Image`
  height: 104px;
  width: 104px;
`;

export const ImagemHeader = styled.Image`
  width: 100%;
  height: 128px;
`;

export const StarIcon = styled.Image`
  width: 19px;
  height: 19px;
  margin-left: 4px;
`;

export const GradeRow = styled.View`
  display: flex;
  margin-left: 10px;
  flex-direction: row;
  margin-bottom: 24px;
`;
