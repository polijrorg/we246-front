import styled from 'styled-components/native';
import {TouchableOpacity, Text, View} from 'react-native';

export const Container = styled(TouchableOpacity)`
    display: flex;
    border-radius: 8px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.primary.main};
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px 12px 12px;
    width: 340px;
`;

export const StyledTitleContainer = styled(View)`
    align-self: flex-start;
`;

export const StyledTitle = styled(Text)`
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 700;
    font-size: 10px;
`;

export const AddressContainer = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

export const AddressImageContainer = styled(View)`
`;

export const AddressImage = styled.Image`
    height: 24px;
    width: 24px;
`;

export const AddressTitleContainer = styled(View)``;

export const AddressTitle = styled(Text)`
    font-weight: 900;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.lowEmphasis};
`;

export const AddressSubTitle = styled(Text)`
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.lowEmphasis};
`;