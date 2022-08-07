import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray_600};
`

export const Header = styled.View`
  width: 100%;
  height: 173px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray_700};
`

export const Logo = styled.Image``