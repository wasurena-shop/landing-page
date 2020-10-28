import React, { useState } from "react"
import NextLink from "next/link"
import { styled } from "plugins/emotion"
import Logo from "../svgs/wasurena-logo-yoko-zure.svg"
import { Container } from "components/Container"
import { Burger } from "components/Burger"
import { NavigationModal } from "components/NavigationModal"

export const HeaderWithModal: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <NavigationModal open={open} closeModal={() => setOpen(false)} />
      <Wrapper>
        <Container>
          <Flex>
            <NextLink href="/" as="">
              <LogoWrapper>
                <Logo />
              </LogoWrapper>
            </NextLink>
            <Controls>
              <Link>
                ONLINE
                <br />
                SHOP
              </Link>
              <Burger open={open} toggleMenu={() => setOpen((prev) => !prev)} />
            </Controls>
          </Flex>
        </Container>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.header`
  box-shadow: 0 2px 10px 10px rgb(233, 233, 233);
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoWrapper = styled.a`
  cursor: pointer;

  & svg {
    display: block;
    height: 48px;
    margin: 6px 0;
  }
`

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  background-color: ${({ theme }) => theme.color.black};
  border: none;
  border-radius: 4px;
  padding: 4px 10px;
  margin-right: 1em;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.7rem;
  color: #fff;
  outline: none;
  text-align: center;
`
