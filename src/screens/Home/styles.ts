import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
   padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.gray_600};
`

export const Header = styled.View`
  width: 100%;
  height: 173px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray_700};
`

export const FormTask = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: -27px;

`

export const Input = styled.TextInput.attrs(({ theme}) => ({
  placeholderTextColor: theme.colors.gray_300

}))`

  ${({ theme }) => css`
      flex: 1;

      background-color: ${theme.colors.gray_500};
      height: 54px;
      padding: 16px;
      border-radius: 6px;
      border: 1px solid ${theme.colors.gray_700};

      font-family: ${theme.fonts.regular};
      font-size: ${RFValue(theme.fonts.sizes.regular)}px;
      color: ${theme.colors.gray_100};

      margin-right: 4px;

    `}
`

export const AddButton = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.blue_dark};
`
export const AddIcon = styled(Feather)`
  ${({ theme }) => css`
    font-size: ${RFValue(theme.fonts.sizes.regular)}px;
    color: ${theme.colors.gray_100}
  `}

`

export const TaskInfoContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
  margin-bottom: 20px;

`;