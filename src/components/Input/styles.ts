import styled, { css } from 'styled-components/native';

export const MainDiv = styled.View`
  width: 358px;
  height: 39px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  gap: 10px;
  display: flex;
  flex-direction: row;
  padding-right: 8px;
  justify-content: space-between;
  align-items: center;
  background-color: #ffff;
`;

export const TextInput = styled.TextInput`
  // font-family: 'Bw Modelica';
  font-size: 16px;
  padding: 8px;
  text-align: left;
  font-weight: 700;
`;

export const Icon = styled.Image`
  width: 19px;
  height: 19px;
`;
