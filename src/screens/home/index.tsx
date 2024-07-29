import React from "react";

import { Body, Container, GreyBar, Header } from "./styles";
import { SearchBar } from "../../components/searchBar";
import { Carousel } from "../../components/homeCarousel";

export function Home(){
    const carouselData = [
        {id:'1', title:'Todos'},
        {id:'2', title:'Abertura'},
        {id:'3', title:'Evento cultural'},
        {id:'4', title:'Minicurso I'},
        {id:'5', title:'Minicurso II'},
        {id:'6', title:'Minicurso III'},
        {id:'7', title:'Palestra temática I'},
        {id:'8', title:'Palestra temática II'},
        {id:'9', title:'Palestra temática III'},
        {id:'10', title:'Palestra temática IV'},
    ]
    return(
        <Container>
            <Header>
                <SearchBar
                    style={{margin: 16}}
                />
                <GreyBar/>
            </Header>
            <Body showsVerticalScrollIndicator={false}>

                <Carousel data={carouselData}/>

            </Body>
        </Container>
    )
}