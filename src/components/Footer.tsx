import { styled } from "plugins/emotion"
import { Container } from "components/Container"

export const Footer = () => (
  <Wrapper>
    <Container>
      <Copyright>©️ ワスレナ商店</Copyright>
    </Container>
  </Wrapper>
)

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
`

const Copyright = styled.p`
  text-align: center;
  color: #a9a9a9;
`
