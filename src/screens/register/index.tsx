import { StatusBar } from "expo-status-bar";
import { ButtonsBox, Container, Forms, Title } from "./styles";
import React from "react";
import { Input } from "../../components/inputs/inputs";
import { Button } from "../../components/btn/btn";
import { Header } from "../../components/header";

export function Register(){

    return(
        <Container>
            <StatusBar backgroundColor="transparent" translucent style="light"/>

            <Header
                title="Cadastro"
            />

            <Forms>
                <Title style={{ marginTop: 24}}>Nome</Title>
                <Input
                placeholder="Seu nome"
                    style={{marginBottom: 24, marginHorizontal: 16}}

                />

                <Title>Email</Title>
                <Input
                placeholder="example@example.com"
                    style={{marginBottom: 24, marginHorizontal: 16}}
                />

                <Title>Senha</Title>
                <Input
                placeholder="********"
                    style={{marginBottom: 24, marginHorizontal: 16}}
                />

                <Title>Repetir senha</Title>
                <Input
                placeholder="********"
                    style={{marginBottom: 24, marginHorizontal: 16}}
                />
            </Forms>

            <ButtonsBox>
                <Button
                    title= 'Finalizar cadastro'
                    style={{marginBottom: 16, marginHorizontal: 16}}
                />

                <Button
                    title='Voltar'
                    type='SECONDARY'
                    style={{marginBottom: 32, marginHorizontal: 16}}
                />
            </ButtonsBox>
        </Container>
    )
}