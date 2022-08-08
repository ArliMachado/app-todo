import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

type TitleProps = {
  fontColor: 'blue' | 'purple'
}
export const Title = styled.Text<TitleProps>`
  ${({ theme, fontColor }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fonts.sizes.medium}px;
    color: ${theme.colors[fontColor]};

    margin-right: 8px;
  `}
`
export const Count = styled.Text`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_400};
    padding: 2px 8px;
    border-radius: 25px;

    font-family: ${theme.fonts.bold};
    font-size: ${theme.fonts.sizes.small}px;
    color: ${theme.colors.gray_200};

    margin-right: 8px;
  `}
`