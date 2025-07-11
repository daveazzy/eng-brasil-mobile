import React from "react";
import { Bar, Input } from "./styles";

import SearchSvg from '../../assets/searchInput/magnifying-glass.svg'
import { useTheme } from "styled-components/native";
import { StyleProp, ViewStyle } from "react-native";

interface SearchBarProps {
    style?: StyleProp<ViewStyle>;
    value: string;
    onChangeText: (text: string) => void;
}

export const SearchBar : React.FC <SearchBarProps> = ({style, value, onChangeText, ...rest}) =>{

    const { COLORS, FONT_FAMILY } = useTheme();


    return(
            <Bar style={style}>
                <SearchSvg fill={ COLORS.GREY_INFO }/>
                <Input 
                    placeholder='Pesquisar evento'
                    placeholderTextColor={COLORS.GREY_ACTIVE}
                    value={value}
                    onChangeText={onChangeText}
                    {...rest}
                    />
            </Bar>
    )
}