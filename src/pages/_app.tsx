import { AppProps } from "next/app"
import Head from "next/head"
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
    <Head>
      <title>ワスレナ商店 - 人から人へ、思いを添えて</title>
    </Head>
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-family: "YakuHanMPs", "Inter", "Noto Serif JP", serif;
          margin: 0;
        }
        .tsume {
          font-family: "YakuHanMP", "Inter", "Noto Serif JP", serif;
        }
        .gothic {
          font-family: "Inter", "BlinkMacSystemFont",
            "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
        }
      `}
    />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
