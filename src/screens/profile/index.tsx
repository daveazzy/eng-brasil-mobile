import React from "react";
import { Academic, Body, BottomButton, ButtonsText, Container, Info, LogoutButton, MiddleButton, Name, Photo, ProfileContainer, QRCodeContainer, TitleSession, TopButton } from "./styles";
import QRCode from "react-native-qrcode-svg"
import { useAuth } from "../../hooks/UseAuth";
import { StatusBar } from "react-native";

export function Profile () {

  const qrCodeToken = '123456789'

  const {user, signOut} = useAuth();


  return(
    <Container>
      <StatusBar 
          backgroundColor="transparent" 
          translucent 
          barStyle={"dark-content"}
                
      />
      <ProfileContainer>
        <Photo>
        </Photo>
        <Info>
          <Name>Davidson Oiveira</Name>
          <Academic>Engenheiro de Software</Academic>
        </Info>
        <QRCodeContainer>
          <QRCode 
            value={qrCodeToken} 
            size={48}
            color= "#0961C9"
            />

        </QRCodeContainer>
      </ProfileContainer>

      <Body>

        <TitleSession>Informações de perfil e configurações</TitleSession>
        <TopButton>
          <ButtonsText>Editar perfil</ButtonsText>
        </TopButton>

        <MiddleButton>
          <ButtonsText>Alterar senha</ButtonsText>
        </MiddleButton>

        <BottomButton>
          <ButtonsText>Outras configurações</ButtonsText>
        </BottomButton>

        <TitleSession>Sair</TitleSession>

        <LogoutButton
          onPress={signOut}
        >
          <ButtonsText>Sair</ButtonsText>
        </LogoutButton>
      </Body>
    </Container>
  )
}