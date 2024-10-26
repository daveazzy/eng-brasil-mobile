import React, { useState } from "react";
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';
import { 
  Academic, Body, BottomButton, ButtonsText, Container, Info, 
  LogoutButton, MiddleButton, Name, Photo, ProfileContainer, 
  QRCodeContainer, TitleSession, TopButton, ButtonContent
} from "./styles";
import { QRCodeModal } from '../../components/qrCode'
import { useAuth } from "../../hooks/UseAuth";
import { StatusBar, TouchableOpacity } from "react-native";

export function Profile() {
  const { user, signOut } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const qrCodeToken = user.qrCodeToken;
  const firstName = user.name.split(' ')[0];

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Container>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle={"dark-content"}
      />
      <ProfileContainer>
        <Photo />
        <Info>
          <Name>{firstName}</Name>
          <Academic>{user.academicBackground ? user.academicBackground : 'Congressista'}</Academic>
        </Info>
        <QRCodeContainer>
          <TouchableOpacity onPress={toggleModal}>
            <MaterialIcons name="qr-code" size={48} color="#0961C9" />
          </TouchableOpacity>
        </QRCodeContainer>
      </ProfileContainer>

      <Body>
        <TitleSession>Informações de perfil e configurações</TitleSession>

        <TopButton>
          <ButtonContent>
            <FontAwesome name="user" size={20} color="#0961C9" style={{ marginRight: 10 }} />
            <ButtonsText>Editar perfil</ButtonsText>
            <Feather name="chevron-right" size={20} color="#0961C9" style={{ marginLeft: 'auto' }} />
          </ButtonContent>
        </TopButton>

        <MiddleButton>
          <ButtonContent>
            <FontAwesome name="lock" size={20} color="#0961C9" style={{ marginRight: 10 }} />
            <ButtonsText>Alterar senha</ButtonsText>
            <Feather name="chevron-right" size={20} color="#0961C9" style={{ marginLeft: 'auto' }} />
          </ButtonContent>
        </MiddleButton>

        <BottomButton>
          <ButtonContent>
            <FontAwesome name="cog" size={20} color="#0961C9" style={{ marginRight: 10 }} />
            <ButtonsText>Outras configurações</ButtonsText>
            <Feather name="chevron-right" size={20} color="#0961C9" style={{ marginLeft: 'auto' }} />
          </ButtonContent>
        </BottomButton>

        <TitleSession>Sair</TitleSession>

        <LogoutButton onPress={signOut}>
          <ButtonContent>
            <FontAwesome name="sign-out" size={20} color="#0961C9" style={{ marginRight: 10 }} />
            <ButtonsText>Sair</ButtonsText>
            <Feather name="chevron-right" size={20} color="#0961C9" style={{ marginLeft: 'auto' }} />
          </ButtonContent>
        </LogoutButton>
      </Body>

      <QRCodeModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        qrCodeToken={qrCodeToken}
      />
    </Container>
  );
}
