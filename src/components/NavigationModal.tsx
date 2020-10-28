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
    href: "/flow",
  },
  {
    title: "お問い合わせ",
    href: "/contact",
  },
]

export const NavigationModal: React.FC<Props> = ({ open, closeModal }) =>
  open ? (
    <>
      <Wrapper>
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
      </Wrapper>
      <Global
        styles={css`
          body {
            overflow: hidden;
          }
        `}
      />
    </>
  ) : null

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  color: #fff;
  cursor: pointer;
`
