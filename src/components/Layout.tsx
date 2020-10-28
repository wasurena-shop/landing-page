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
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

const Main = styled.main`
  flex: 1 1 auto;
`
