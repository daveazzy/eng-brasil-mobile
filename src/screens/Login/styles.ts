import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    flex: 1;
    padding: 0 16px;
`;

export const Container_img = styled.View`
    flex: 0.30;
    align-items: center;
    justify-content: center;
    background-color: firebrick;
    margin-top: 51px;
    margin-bottom: 72px;
    min-height: 243px;
`;

export const Container_forms = styled.View `
    flex: 1;
    background-color: blue;
`;



export const Logo_eng_brasil = styled.Image`
    width: 244px;
    height: 244px;


`
