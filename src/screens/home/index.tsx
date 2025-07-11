import React, { useState, useEffect, useCallback } from "react";
import { Body, Container, GreyBar, Header, Palestra } from "./styles";
import { SearchBar } from "../../components/searchBar";
import { Carousel } from "../../components/homeCarousel";
import SpeakerCard from "../../components/boxSpeakers";
import { speakers, Speaker } from "../../@event/event";
import { StatusBar } from "react-native";

function regexText(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function getUniqueTitle(speakers: Speaker[]): string[] {
    const titles = speakers.map(speaker => speaker.title);
    return ["Todos", ...new Set(titles)];
}

export function Home() {
    const [searchText, setSearchText] = useState<string>('');
    const [filteredSpeakers, setFilteredSpeakers] = useState<Speaker[]>(speakers);
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

    const carouselData = getUniqueTitle(speakers).map((title, index) => ({
        id: (index + 1).toString(),
        title: title
    }));

    const filterSpeakers = useCallback(() => {
        var filtered = speakers;

        if (selectedCategory !== 'Todos') {
            filtered = filtered.filter(speaker => speaker.title === selectedCategory);
        }

        if (searchText !== '') {
            const regexSearchText = regexText(searchText);
            filtered = filtered.filter(speaker =>
                speaker.sessions.some(session =>
                    regexText(session.title).includes(regexSearchText))
            );
        }

        setFilteredSpeakers(filtered);
    }, [searchText, selectedCategory]);

    useEffect(() => {
        filterSpeakers();
    }, [filterSpeakers]);

    const handleCarouselPress = useCallback((item: { id: string; title: string }) => {
        setSelectedCategory(item.title);
    }, []);

    return (
        <Container>
                <StatusBar 
                backgroundColor="transparent" 
                translucent 
                barStyle={"dark-content"}
                
                />
            <Header>
                <SearchBar
                    value={searchText}
                    onChangeText={setSearchText}
                    style={{ margin: 16 }}
                />
                <GreyBar />
            </Header>
            <Body showsVerticalScrollIndicator={false}>

                <Carousel data={carouselData} onItemPress={handleCarouselPress} />

                <Palestra>PALESTRAS</Palestra>

                {filteredSpeakers.map(speaker => (
                    <SpeakerCard key={speaker.id} speaker={speaker} />
                ))}

            </Body>
        </Container>
    );
}
