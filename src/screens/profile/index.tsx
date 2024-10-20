import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { BackText, Container, EditPictureButton, EditPictureText, Header, Input, InputLabel, ProfilePicture, ProfilePictureContainer, SaveButton, SaveButtonText, Title } from './styles';

const Profile = () => {
  const [name, setName] = useState('José da Silva');
  const [email, setEmail] = useState('email@exemplo.com');
  const [institution, setInstitution] = useState('UFRN');
  const [state, setState] = useState('RN');
  const [bio, setBio] = useState('Engenheiro de Software apaixonado por tecnologia.');

  return (
    <Container>
      <Header>
        <TouchableOpacity>
          <BackText>Voltar</BackText>
        </TouchableOpacity>
        <Title>Perfil</Title>
      </Header>

      <ProfilePictureContainer>
        <ProfilePicture source={{ uri: 'https://placehold.it/100x100' }} />
        <EditPictureButton>
          <EditPictureText>Editar Foto</EditPictureText>
        </EditPictureButton>
      </ProfilePictureContainer>

      <InputLabel>Nome</InputLabel>
      <Input value={name} onChangeText={setName} />

      <InputLabel>E-mail</InputLabel>
      <Input value={email} onChangeText={setEmail} editable={false} />

      <InputLabel>Instituição</InputLabel>
      <Input value={institution} onChangeText={setInstitution} />

      <InputLabel>Estado</InputLabel>
      <Input value={state} onChangeText={setState} />

      <InputLabel>Biografia</InputLabel>
      <Input
        value={bio}
        onChangeText={setBio}
        multiline
        style={{ height: 80, textAlignVertical: 'top' }}
      />

      <SaveButton>
        <SaveButtonText>Salvar</SaveButtonText>
      </SaveButton>
    </Container>
  );
};

export default Profile;