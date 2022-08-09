import { Feather, Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 64px;
  width: 100%;
  border-radius: 8px;
  padding: 12px 8px 12px 12px;

  margin-bottom: 8px;

  ${({ theme }) => css `
    background-color: ${theme.colors.gray_500};
    border: 1px solid ${theme.colors.gray_400};
  `}

`

export const CheckButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`


export const CicleIcon = styled(Ionicons).attrs({
  name: "ellipse-outline",
})`
    ${({ theme }) => css`
      font-size: ${RFValue(17.5)}px;
      color: ${theme.colors.blue}
  `}
`

export const CheckIcon = styled(Ionicons).attrs({
  name: "checkmark-circle",
})`
    ${({ theme }) => css`
      font-size: ${RFValue(17.5)}px;
      color: ${theme.colors.purple_dark};
  `}
`

type DescriptionProps = {
  isChecked: boolean
}

export const Description = styled.Text<DescriptionProps>`
  ${({ theme, isChecked }) => css`
    color: ${theme.colors.gray_100};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(theme.fonts.sizes.medium)}px;
  
    flex: 1;
  
    margin-left: 8px;

    ${isChecked && `
      text-decoration: line-through;
      color: ${theme.colors.gray_300};

    `}

  `}

`
export const TrashButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`


export const TrashIcon = styled(Feather).attrs({
  name: "trash-2",
})`

  ${({ theme }) => css`
      font-size: ${RFValue(14)}px;
      color: ${theme.colors.gray_300}
  `}

`