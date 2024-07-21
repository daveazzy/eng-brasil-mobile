import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Container,
  Logo_eng_brasil,
  Container_img,
  Container_forms,
} from "./styles";
import logo_engbrasil from "../../assets/logo_engbrasil.png";
import { Input } from "../../components/inputs/inputs";
import { Button } from "../../components/btn/btn";
import { Container_inputs } from "../../components/inputs/styles";
import { Container_Buttons } from "../../components/btn/styles";

export function Home() {
  return (
    <Container>
      <StatusBar backgroundColor="transparent" translucent style="light" />

      <Container_img>
        <Logo_eng_brasil
          source={logo_engbrasil}
          resizeMode="contain"
        ></Logo_eng_brasil>
      </Container_img>

     
        <Container_inputs>
            <Input />
            <Input />
        </Container_inputs>
        
        <Container_Buttons>
            <Button />
            <Button />
        </Container_Buttons>
      
    </Container>
  );
}
