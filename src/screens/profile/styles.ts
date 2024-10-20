import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackText = styled.Text`
  color: #1b388d;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #1b388d;
`;

export const ProfilePictureContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const ProfilePicture = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const EditPictureButton = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const EditPictureText = styled.Text`
  color: #1b388d;
`;

export const InputLabel = styled.Text`
  color: #1b388d;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  background-color: #f0f6ff;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 5px;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #1b388d;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  margin-top: 20px;
`;

export const SaveButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;