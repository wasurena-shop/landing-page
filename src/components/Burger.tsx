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
  margin: 0 1em;
  padding: 0;
  width: ${WIDTH};
  height: 24px;
  border: none;
  outline: none;
  background-color: transparent;
`

export const BurgerInner = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &,
  &:before,
  &:after {
    width: ${WIDTH};
    height: 3px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;

    background-color: ${({ open, theme }: { open: boolean; theme: Theme }) =>
      open ? "#fff" : theme.color.black};
  }
  &:before,
  &:after {
    display: block;
    content: "";
  }
  &:before {
    position: absolute;
    top: -10px;
  }
  &:after {
    position: absolute;
    bottom: -10px;
  }
`
