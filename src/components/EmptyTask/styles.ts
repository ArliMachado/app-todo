import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 208px;
  padding: 48px 20px;

  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${({ theme }) => theme.colors.gray_400};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(theme.fonts.sizes.medium)}px;
    color: ${theme.colors.gray_300};

    margin-top: 16px;

  `}

`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(theme.fonts.sizes.medium)}px;
    color: ${theme.colors.gray_300};

  `}
`