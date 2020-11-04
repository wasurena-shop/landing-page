import EmStyled, { CreateStyled } from "@emotion/styled"

export type Theme = {
  color: {
    primary: string
    secondary: string
    accent: string
    white: string
  }
  animation: {
    transition: string
  }
  shadow: string
}

export const styled = EmStyled as CreateStyled<Theme>
