import { FC } from "react"
import { styled, Theme } from "plugins/emotion"

type Props = {
  open: boolean
  toggleMenu: () => void
}

export const Burger: FC<Props> = ({ open, toggleMenu }) => (
  <Wrapper onClick={toggleMenu}>
    <BurgerInner open={open} />
  </Wrapper>
)

const WIDTH = "36px"

const Wrapper = styled.button`
  position: relative;
  z-index: 11;
  display: block;
  cursor: pointer;
  margin: 0;
  padding: 0;
  width: ${WIDTH};
  height: 24px;
  border: none;
  outline: none;
  background-color: transparent;
`

type Open = {
  open: boolean
  theme: Theme
}

export const BurgerInner = styled.div`
  &,
  &:before,
  &:after {
    width: ${WIDTH};
    height: 2px;
    transition: ${({ theme }) => theme.animation.transition};
    border-radius: 4px;
    background-color: ${({ open, theme }: Open) =>
      open ? "#fff" : theme.color.primary};
  }
  &:before,
  &:after {
    display: block;
    content: "";
  }

  & {
    position: absolute;
    top: 0;
    transform: ${({ open }: Open) =>
      open
        ? "translate3d(0,10px,0) rotate(45deg)"
        : "translate3d(0,0,0) rotate(0)"};
  }
  &:before {
    position: absolute;
    top: 10px;
    opacity: ${({ open }: Open) => (open ? "0" : "1")};
    transform: ${({ open }: Open) =>
      open
        ? "rotate(-45deg) translate3d(30px,-6px,0)"
        : "rotate(-0) translate3d(0,0,0)"};
  }
  &:after {
    position: absolute;
    top: 20px;
    transform: ${({ open }: Open) =>
      open
        ? "translate3d(0,-20px,0) rotate(-90deg)"
        : "translate3d(0,0,0) rotate(0)"};
  }
`
