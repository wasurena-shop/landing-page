import React, { useState, useEffect } from "react"
import NextLink from "next/link"
import { styled } from "plugins/emotion"
import Logo from "../svgs/wasurena-logo-yoko-zure.svg"
import { FaExternalLinkAlt } from "react-icons/fa"
import { Container } from "components/Container"
import { Burger } from "components/Burger"
import { NavigationModal } from "components/NavigationModal"

export const HeaderWithModal: React.FC = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) window.scrollTo(0, 0)
  }, [open])

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
                <span>
                  ONLINE
                  <br />
                  SHOP
                </span>
                <FaExternalLinkAlt />
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
    height: 38px;
    margin: 10px 0;
  }
  @media only screen and (min-width: 700px) {
    & > svg {
      height: 48px;
      margin: 6 8px 0;
    }
  }
`

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  background-color: ${({ theme }) => theme.color.primary};
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 1.4em;
  cursor: pointer;
  font-weight: bold;
  font-size: 10px;
  color: #fff;
  outline: none;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px;
  display: flex;
  align-items: center;

  & > svg {
    margin-left: 0.4rem;
    font-size: 14px;
  }
  @media only screen and (max-width: 330px) {
    & > svg {
      display: none;
    }
  }
`
