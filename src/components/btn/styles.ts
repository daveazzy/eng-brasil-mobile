import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import theme from "../../theme/theme";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;

    min-height: 48px;
    max-height: 48px;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.BLUE : theme.COLORS.BLUE_INACTIVE};

    border-radius: 4px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE}
    /* Mensagem para o MJ: estilize a fonte. lembre-se de instalar a fonte que ce quer
    pesquise "como instalar fonte usando expo google fonts" */
    
    /* um desafio pra ti: veja como eu passei a prop para a cor do botão
    faça o mesmo com o texto, para quando o botão for BLUE_INACTIVE voce colocar a fonte na cor BLUE */
`;