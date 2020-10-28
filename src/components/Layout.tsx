import { FC } from "react"
import { styled } from "plugins/emotion"
import { HeaderWithModal } from "components/HeaderWithModal"
import { Footer } from "components/Footer"

export const Layout: FC = ({ children }) => {
  return (
    <Wrapper>
      <HeaderWithModal />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1 1 auto;
`
