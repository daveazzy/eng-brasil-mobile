import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Container,
  Logo_eng_brasil,
  Container_img,
  Container_forms,
  Scroll,
  InputTitle,
  Container_Input,
  Container_Btn,
  PassRecover,
  PassContainer,
} from "./styles";
import logo_engbrasil from "../../assets/logo_engbrasil.png";
import { Input } from "../../components/inputs/inputs";
import { Button } from "../../components/btn/btn";

export function Home() {
  return (
    <Container>
      <StatusBar 
      backgroundColor="transparent" 
      translucent 
      style="dark" 
      />

      <Container_img>
        <Logo_eng_brasil
          source={logo_engbrasil}
          resizeMode="contain"
        /> 

      </Container_img>
      
      <Container_forms>
        <Container_Input>
        <InputTitle>Email</InputTitle>
        <Input/>
        <InputTitle>Senha</InputTitle>
        <Input/>
        <PassContainer>
        <PassRecover>Recuperar senha</PassRecover>
        </PassContainer>
        </Container_Input>

        <Container_Btn>
          <Button/>
          <Button/>
        </Container_Btn>
      </Container_forms>
      
    </Container>
  );
}
