import React from "react";
import { StatusBar } from "expo-status-bar";
import { Container, Mj } from "./styles";

export function Home() {
    return(
        <Container>
            <StatusBar
                backgroundColor="transparent"
                translucent
                style="light"
            />
            <Mj></Mj>
        </Container>
    )
}