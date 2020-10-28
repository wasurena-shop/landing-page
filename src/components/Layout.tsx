import { FC, useState } from "react"
import { styled } from "plugins/emotion"
import { Header } from "components/Header"
import { Footer } from "components/Footer"
import { NavigationModal } from "components/NavigationModal"

export const Layout: FC = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <Wrapper>
      <Header openModal={() => setOpen(true)} />
      <Main>{children}</Main>
      <Footer />
      <NavigationModal open={open} closeModal={() => setOpen(false)} />
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
