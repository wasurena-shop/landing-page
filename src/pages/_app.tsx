import { AppProps } from "next/app"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import { Theme } from "plugins/emotion"

const theme: Theme = {
  color: {
    primary: "#ccc",
    secondary: "#dedede",
    accent: "#fea",
    black: "#231815",
  },
}

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          position: relative;
          font-family: "Inter", "BlinkMacSystemFont",
            "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
          margin: 0;
          padding: 0;
        }
      `}
    />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
