import React from "react";
import { Text } from "react-native";
import { Body, BottomButton, Container, MiddleButton, ProfileContainer, TopButton } from "./styles";

export function Profile () {
  return(
    <Container>
      <ProfileContainer>

      </ProfileContainer>

      <Body>
        <TopButton></TopButton>

        <MiddleButton></MiddleButton>

        <BottomButton></BottomButton>
      </Body>
    </Container>
  )
}