import NextLink from "next/link"
import { styled } from "plugins/emotion"
import { links, snsLinks } from "constants/links"
import { targetBlank } from "constants/targetBlank"
import { Container } from "components/Container"
import Logo from "../svgs/wasurena-logo-zure-white.svg"

export const Footer = () => (
  <Wrapper>
    <Container>
      <Flex>
        <Links>
          {links.map((link, i) => (
            <li key={i}>
              <NextLink href={link.href}>
                <a>{link.title}</a>
              </NextLink>
            </li>
          ))}
        </Links>
        <StyledLogo />
        <SNSLinks>
          {Object.values(snsLinks).map(({ Icon, ...link }, i) => (
            <li key={i}>
              <a href={link.href} {...targetBlank}>
                <Icon />
              </a>
            </li>
          ))}
        </SNSLinks>
        <Copyright className="gothic">
          ©️ {new Date().getFullYear()} ワスレナ商店 All rights reserved.
        </Copyright>
      </Flex>
    </Container>
  </Wrapper>
)

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  padding: 2rem 0;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledLogo = styled(Logo)`
  width: 120px;
  margin-top: 1rem;
`

const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  & > li {
    padding-bottom: 0.3rem;

    // top border
    &:not(:first-of-type)::before {
      content: "";
      width: 100%;
      height: 1px;
      display: block;
      background-color: ${({ theme }) => theme.color.secondary};
      margin-bottom: 0.3rem;
    }

    & > a {
      color: ${({ theme }) => theme.color.white};
      text-decoration: none;
      display: inline-block;
      width: 100%;
      padding: 0 0.5rem;
    }
  }
`

const SNSLinks = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 1rem 0 0;

  & > li {
    display: flex;
    align-items: center;
  }

  & > li:not(:first-of-type) {
    &::before {
      content: "";
      width: 1px;
      height: 120%;
      display: inline-block;
      background-color: ${({ theme }) => theme.color.secondary};
    }
  }

  a {
    box-sizing: content-box;
    color: #e8e8e8;
    font-size: 1.2rem;
    padding: 0.2rem 0.5rem;
    height: 1.2rem;
    margin: 0 0.3rem;
  }
`

const Copyright = styled.p`
  margin: 2rem 0 0;
  text-align: center;
  color: #a9a9a9;
  font-size: 0.8rem;
`
