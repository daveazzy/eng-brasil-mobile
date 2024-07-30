import styled from "styled-components/native";

export const Card = styled.View`
  background-color: white;
  margin: 0 16px 16px 16px;
  padding: 16px 0;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-color: ${({ theme })=> theme.COLORS.GREY_10};
  /* background-color: red; */
`;

export const HeaderText = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  margin-right: 8px;
  align-items: center;
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #999;
`;

export const DateTime = styled.Text`
  font-size: 14px;
  color: #999;
  margin-left: 10px;
`;

export const Body = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const SpeakerImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  margin-right: 10px;
  margin-left: 16px;
`;

export const Info = styled.View`
  flex: 1;
  margin-right: 16px;
`;

export const SessionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #1b388d;
`;

export const SpeakerName = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const Location = styled.Text`
  font-size: 12px;
  color: #999;
`;