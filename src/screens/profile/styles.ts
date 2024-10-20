import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLUE_BRIGTHEN};
`;

export const ProfileContainer = styled.View`
  flex: 0.3;
  `
export const Body = styled.View`
  flex: 0.7;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`
export const TopButton = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.BLUE_BRIGTHEN};
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.BLUE_INACTIVE};
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
    gap: 8px;
`
export const MiddleButton = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.BLUE_BRIGTHEN};
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.BLUE_INACTIVE};
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
    gap: 8px;
`
export const BottomButton = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.BLUE_BRIGTHEN};
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.BLUE_INACTIVE};
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
    gap: 8px;
`