import Head from "next/head"
import { Layout } from "components/Layout"

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>ワスレナ商店 - 人から人へ、思いを添えて</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>wasurena-shop</h1>
      </div>
    </Layout>
  )
}

export default Home
