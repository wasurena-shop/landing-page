import React from "react"
import { Global, css } from "@emotion/core"
import { styled } from "plugins/emotion"
import { Navigation } from "components/Navigation"

type Props = {
  open: boolean
  closeModal: () => void
}

export const NavigationModal: React.FC<Props> = ({ open, closeModal }) => (
  <>
    <Overlay open={open} />
    <Wrapper open={open}>
      <Inner open={open}>
        <Navigation open={open} onLinkClick={closeModal} />
      </Inner>
    </Wrapper>
    {open ? (
      <Global
        styles={css`
          body {
            overflow: hidden;
          }
        `}
      />
    ) : null}
  </>
)

type Open = {
  open: boolean
}

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.color.black};
  transition: ${({ theme }) => theme.animation.transition};
  opacity: ${({ open }: Open) => (open ? "1" : "0")};
  pointer-events: ${({ open }: Open) => (open ? "initial" : "none")};
`

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 11;

  transition: ${({ theme }) => theme.animation.transition};
  opacity: ${({ open }: Open) => (open ? "1" : "0")};
  pointer-events: ${({ open }: Open) => (open ? "initial" : "none")};
  color: #fff;
`
const Inner = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.animation.transition};
  transform: ${({ open }: Open) =>
    open ? "translate(-50%,-50%) scale(1)" : "translate(-50%,-50%) scale(1.2)"};
`
