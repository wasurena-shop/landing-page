import { AppProps } from "next/app"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import { Theme } from "plugins/emotion"

const theme: Theme = {
  color: {
    primary: "#231815",
    secondary: "#555",
    accent: "#00b9cc",
    white: "#fff",
  },
  animation: {
    transition: "all 0.3s ease",
  },
  shadow: "0px 4px 15px rgba(169, 179, 187, 0.25)",
}

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-family: "Inter", "BlinkMacSystemFont",
            "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
          margin: 0;
        }
      `}
    />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
