import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    height: 102px;
    flex-direction: row;
    background-color: ${({ theme })=> theme.COLORS.BLUE} ;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;