import React, { useState, useEffect } from "react";

import { Body, Container, GreyBar, Header, Palestra } from "./styles";
import { SearchBar } from "../../components/searchBar";
import { Carousel } from "../../components/homeCarousel";
import SpeakerCard from "../../components/boxSpeakers";
import { speakers } from "../../@event/event";

export function Home() {
    const [searchText, setSearchText] = useState('');
    const [filteredSpeakers, setFilteredSpeakers] = useState(speakers);

    const carouselData = [
        { id: '1', title: 'Todos' },
        { id: '2', title: 'Abertura' },
        { id: '3', title: 'Evento cultural' },
        { id: '4', title: 'Minicurso I' },
        { id: '5', title: 'Minicurso II' },
        { id: '6', title: 'Minicurso III' },
        { id: '7', title: 'Palestra temática I' },
        { id: '8', title: 'Palestra temática II' },
        { id: '9', title: 'Palestra temática III' },
        { id: '10', title: 'Palestra temática IV' },
    ];

    useEffect(() => {
        if (searchText === '') {
            setFilteredSpeakers(speakers);
        } else {
            const filtered = speakers.filter(speaker =>
                speaker.sessions.some(session =>
                    session.title.toLowerCase().includes(searchText.toLowerCase())
                )
            );
            setFilteredSpeakers(filtered);
        }
    }, [searchText]);

    return (
        <Container>
            <Header>
                <SearchBar
                    value={searchText}
                    onChangeText={setSearchText}
                    style={{ margin: 16 }}
                />
                <GreyBar />
            </Header>
            <Body showsVerticalScrollIndicator={false}>

                <Carousel data={carouselData} />

                <Palestra>PALESTRAS</Palestra>

                {filteredSpeakers.map((speaker) => (
                    <SpeakerCard key={speaker.id} speaker={speaker} />
                ))}

            </Body>
        </Container>
    );
}
