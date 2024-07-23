import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    flex: 1;
`;
export const Scroll = styled.ScrollView`
background-color: grey;
`

export const Container_img = styled.View`
    align-items: center;
    justify-content: center;
    padding-top: 51px;
    padding-bottom: 72px;
`;
export const InputTitle = styled.Text`
    margin: 0 16px 5px 16px;
`

export const Container_forms = styled.View `
    flex: 1;
    align-content: space-between;
    background-color: red;
`;
export const Container_Input = styled.View`
`
export const Container_Btn = styled.View`
`

export const Logo_eng_brasil = styled.Image`
    width: 244px;
    height: 244px;
    background-color: red;
`
export const PassContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 16px;
`
export const PassRecover = styled.Text`
`
