import React from "react";
import { Text } from "react-native";
import { Academic, Arrow, Body, BottomButton, ButtonsText, Container, IconArrow, IconConfig, IconLock, Info, Logout, LogoutButton, MiddleButton, Name, Pencil, Photo, ProfileContainer, QRCodeContainer, TitleSession, TopButton } from "./styles";
import QRCode from "react-native-qrcode-svg"

export function Profile () {

  const qrCodeToken = '123456789'


  return(
    <Container>
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
          <Pencil/>
          <ButtonsText>Editar perfil</ButtonsText>
          <Arrow>
            <IconArrow/>
          </Arrow>
        </TopButton>

        <MiddleButton>
        <IconLock/>
          <ButtonsText>Alterar senha</ButtonsText>
          <Arrow>
            <IconArrow/>
          </Arrow>
        </MiddleButton>

        <BottomButton>
          <IconConfig/>
          <ButtonsText>Outras configurações</ButtonsText>
          <Arrow>
            <IconArrow/>
          </Arrow>
        </BottomButton>

        <TitleSession>Sair</TitleSession>

        <LogoutButton>
          <Logout/>
          <ButtonsText>Sair</ButtonsText>
        </LogoutButton>
      </Body>
    </Container>
  )
}