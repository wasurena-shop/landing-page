import NextLink from "next/link"
import { styled } from "plugins/emotion"
import Logo from "../svgs/wasurena-logo-yoko-zure.svg"
import { Container } from "components/Container"

export const Header = () => (
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
            ONELINE
            <br />
            SHOP
          </Link>
          <button>MENU</button>
        </Controls>
      </Flex>
    </Container>
  </Wrapper>
)

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
  padding: 6px 12px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.8rem;
  color: #fff;
  outline: none;
  text-align: center;
`
