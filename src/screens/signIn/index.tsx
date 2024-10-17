import React from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import {
  Container,
  Logo_eng_brasil,
  Container_img,
  Input_Title,
  Forms,
  PassRecoveryBox,
  PassRecoveryText,
  InputBox,
  ButtonBox,
} from "./styles";
import logo_engbrasil from "../../assets/logo_engbrasil.png";
import { Button } from "../../components/btn/btn";
import { Input } from "../../components/inputs/inputs";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";

export function SignIn() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('register')
  }

  return (
    <Container>
      <StatusBar backgroundColor="transparent" translucent style="dark" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
          <Container_img>
            <Logo_eng_brasil source={logo_engbrasil} resizeMode="contain" />
          </Container_img>

          <Forms>
            <InputBox>
              <Input_Title>Email</Input_Title>
              <Input
                placeholder="example@example.com"
                autoCapitalize="none"
                style={{ marginBottom: 24 }}
              />

              <Input_Title>Senha</Input_Title>
              <Input
                placeholder="********"
                secureTextEntry
                autoCapitalize="none"
                style={{ marginBottom: 24 }}
              />

              <PassRecoveryBox>
                <PassRecoveryText>Recuperar senha</PassRecoveryText>
              </PassRecoveryBox>
            </InputBox>

            <ButtonBox>
              <Button 
                title="Entrar" 
                style={{ marginBottom: 16 }} />
              <Button
                title="Cadastrar-se"
                type="SECONDARY"
                style={{ marginBottom: 24 }}
                onPress={handleNewAccount}
              />
            </ButtonBox>
          </Forms>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
