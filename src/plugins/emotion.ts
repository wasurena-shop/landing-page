import EmStyled, { CreateStyled } from "@emotion/styled"

export type Theme = {
  color: {
    primary: string
    secondary: string
    accent: string
    black: string
  }
}

export const styled = EmStyled as CreateStyled<Theme>
