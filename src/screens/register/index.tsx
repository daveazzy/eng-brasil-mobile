import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, ScrollView, Platform, Alert } from "react-native";
import { ButtonsBox, Container, Forms, Title } from "./styles";
import React, { useState } from "react";
import { Input } from "../../components/inputs/inputs";
import { Button } from "../../components/btn/btn";
import { Header } from "../../components/header";
import { supabase } from "../../utils/supabaseClient/supabaseClient"; // Certifique-se de importar seu client do Supabase

export function Register() {
  // Estados para armazenar os dados dos inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  // Função para cadastrar o usuário na tabela 'participant'
  async function handleSignUp() {
    if (password !== passwordRepeat) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    try {
      // Faz a requisição POST para cadastrar o usuário na tabela 'participant'
      const { data, error } = await supabase
        .from("Participant")
        .insert([{ name, email, password }]);

        console.log(name, email, password)

      if (error) {
        console.error("Erro ao cadastrar:", error.message);
        Alert.alert("Erro", error.message);
      } else {
        Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      Alert.alert("Erro", "Erro ao conectar com o servidor");
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={100}
    >
      <StatusBar backgroundColor="transparent" translucent style="light" />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Header title="Cadastro" />

          <Forms>
            <Title style={{ marginTop: 24 }}>Nome</Title>
            <Input
              placeholder="Seu nome"
              style={{ marginBottom: 24, marginHorizontal: 16 }}
              value={name}
              onChangeText={setName} // Armazena o nome
            />

            <Title>Email</Title>
            <Input
              placeholder="example@example.com"
              style={{ marginBottom: 24, marginHorizontal: 16 }}
              value={email}
              onChangeText={setEmail} // Armazena o email
            />

            <Title>Senha</Title>
            <Input
              placeholder="********"
              style={{ marginBottom: 24, marginHorizontal: 16 }}
              secureTextEntry
              value={password}
              onChangeText={setPassword} // Armazena a senha
            />

            <Title>Repetir senha</Title>
            <Input
              placeholder="********"
              style={{ marginBottom: 24, marginHorizontal: 16 }}
              secureTextEntry
              value={passwordRepeat}
              onChangeText={setPasswordRepeat} // Armazena a repetição da senha
            />
          </Forms>

          <ButtonsBox>
            <Button
              title="Finalizar cadastro"
              style={{ marginBottom: 16, marginHorizontal: 16 }}
              onPress={handleSignUp} // Função que chama o Supabase para cadastro
            />

            <Button
              title="Voltar"
              type="SECONDARY"
              style={{ marginBottom: 32, marginHorizontal: 16 }}
            />
          </ButtonsBox>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
