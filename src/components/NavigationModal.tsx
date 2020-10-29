import React from "react"
import NextLink from "next/link"
import { Global, css } from "@emotion/core"
import { styled } from "plugins/emotion"

type Props = {
  open: boolean
  closeModal: () => void
}

const links: { title: string; href: string }[] = [
  {
    title: "ワスレナ商店について",
    href: "/",
  },
  {
    title: "お知らせ",
    href: "/news",
  },
  {
    title: "ご出品の流れ",
    href: "/exhibit-flow",
  },
  {
    title: "お問い合わせ",
    href: "/contact",
  },
]

export const NavigationModal: React.FC<Props> = ({ open, closeModal }) => (
  <>
    <Overlay open={open} />
    <Wrapper open={open}>
      <Inner open={open}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NextLink href={link.href}>
                <Link onClick={closeModal}>{link.title}</Link>
              </NextLink>
            </li>
          ))}
        </ul>
        <button onClick={closeModal}>閉じる</button>
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
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.animation.transition};
  transform: ${({ open }: Open) =>
    open ? "translate(-50%,-50%) scale(1)" : "translate(-50%,-50%) scale(1.2)"};
`

const Link = styled.a`
  color: #fff;
  cursor: pointer;
`
