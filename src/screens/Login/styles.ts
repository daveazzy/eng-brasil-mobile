import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    background-color: red;
    flex: 1;
    align-items: center;
`;

export const Mj = styled.TouchableOpacity`
    width: 200px;
    height: 56px;
    background-color: aliceblue;
`