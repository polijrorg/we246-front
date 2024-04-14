import styled from 'styled-components/native';

export const InfoDiv = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  border: 0.5px;
  width: 100%;
  height: 79px;
`;

export const InfoDivLeft = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InfoDivRight = styled.View`
  display: flex;
  flex-direction: row;
  align-items: right;
  margin-right: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  justify-content: center;
  font-weight: 700;
  padding-left: 8px;
  color: black;
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

export const Grade = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  text-align: left;
  color: black;
`;

export const Icon = styled.Image`
  width: 25px;
  height: 25px;
  justify-content: center;
`;
