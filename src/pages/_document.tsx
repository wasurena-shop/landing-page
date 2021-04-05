import NextDocument, { Html, Head, Main, NextScript } from "next/document"

type Props = {}

const DESCRIPTION =
  "手に取ったものには何らかの意味がある。その意味を、価値を見出す次の人へと繋ぐサスティナブルなサイクルを。循環するファッションも又、ファッションである。"

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={DESCRIPTION} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="og:title"
            content="ワスレナ商店 - 人から人へ、思いを添えて"
          />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:url" content="https://www.wasurena-shouten.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.wasurena-shouten.com/images/ogp.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            href="/apple-touch-icon.png"
          />
          <link rel="icon" type="image/png" href="/icon-192x192.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Serif+JP:wght@500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanmp.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanmp_s.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
