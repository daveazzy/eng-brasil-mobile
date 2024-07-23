import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    flex: 1;
`;

export const Container_img = styled.View`
    align-items: center;
    justify-content: center;
    padding-top: 51px;
    padding-bottom: 72px;
`;

export const Logo_eng_brasil = styled.Image`
    width: 300px;
    height: 244px;
`
export const Input_Title = styled.Text`
    margin-bottom: 12px;
`
export const PassRecoveryBox = styled.View`
    justify-content: flex-end;
    flex-direction: row;
`
export const PassRecoveryText = styled.Text`

`
export const Forms = styled.View`
    flex: 1;
    padding: 0 16px;
    justify-content: space-between;    
`
export const InputBox = styled.View`
`
export const ButtonBox = styled.View`
`
export const Scroll = styled.ScrollView`
    flex-grow: 1;
`
