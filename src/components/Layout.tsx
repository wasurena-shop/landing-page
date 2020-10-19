import { FC } from "react"
import { styled } from "plugins/emotion"

export const Layout: FC = ({ children }) => (
  <Wrapper>
    <header>
      <p>ワスレナ商店</p>
    </header>
    <Main>{children}</Main>
    <footer>
      <p>© ワスレナ商店</p>
    </footer>
  </Wrapper>
)

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primary};
`

const Main = styled.main`
  flex: 1 1 auto;
`
