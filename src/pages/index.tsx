import Head from "next/head"
import { styled } from "plugins/emotion"
import Logo from "../svgs/wasurena-logo-main.svg"
import { Layout } from "components/Layout"
import { Container } from "components/Container"

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>ワスレナ商店 - 人から人へ、思いを添えて</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <BrandInfo>
          <Logo />
          <BrandInfoTitle>人から人へ、思いを添えて</BrandInfoTitle>
          <BrandInfoDesc>
            手に取ったものには何らかの意味がある。その意味を、価値を見出す次の人へと繋ぐサスティナブルなサイクルを。循環するファッションも又、ファッションである。
          </BrandInfoDesc>
        </BrandInfo>

        <Section>
          <ImageWrapper>
            <Image src="/images/main01.png" />
          </ImageWrapper>
          <h2>ただ「服を売る」のではない</h2>
          <div className="content">
            <p>
              人から人へと"思い"も共に受け継いでもらう。それがこれからの時代の循環するファッションです。ワスレナ商店は、ただのブランド古着屋ではありません。「物」だけでなく、人と人を繋ぐ架け橋のような場所です。服を愛する人にとって、サスティナブルで、温もりを感じる、全く新しい古着体験を。
            </p>
          </div>
        </Section>

        <Section>
          <ImageWrapper>
            <Image src="/images/main02.png" />
          </ImageWrapper>
          <h2>ワスレナ商店の特徴</h2>
          <div className="content">
            <p>
              愛用していたけれど、もう着なくなってしまった服、どうせなら大切にしてくれる人に譲りたい。ワスレナ商店では、出品した商品にメッセージを添えることができます。品物にまつわるストーリーを、思い入れを、次の人が受け継ぐ。物だけでなく、人と人が繋がる場所。それがワスレナ商店です。
            </p>
          </div>
        </Section>

        <Section>
          <ImageWrapper>
            <Image src="/images/main03.png" />
          </ImageWrapper>
          <h2>出品について</h2>
          <div className="content">
            <p>
              出品物と一緒にご出品者の品物に対する思いなどをメッセージとして掲載し、出品物に添えて販売いたします。出品物の価格は、ご出品者の希望を基に決定いたします。出品物は、「ワスレナ商店
              online
              shop」で販売いたします。ご出品者の成約金は、ご指定口座に自動で振込まれます。
            </p>
            <div>
              <p>
                ※出品物は委託販売となります。成約後、売上の30%がご出品者に配分されます。配分は、月末締め翌月末払いにてご指定口座にお振込みさせていただきます。
              </p>
            </div>
          </div>
        </Section>
      </Container>
    </Layout>
  )
}

const BrandInfo = styled.section`
  padding: 3em 0;

  & > svg {
    display: block;
    width: 78%;
    margin: auto;
  }
`

const BrandInfoTitle = styled.h2`
  font-size: 1.9rem;
  font-weight: bold;
  text-align: center;
`

const BrandInfoDesc = styled.p`
  font-size: 1.3rem;
  text-align: center;
`

const Section = styled.section`
  padding: 4em 0;
  filter: drop-shadow(${({ theme }) => theme.shadow});

  & > h2,
  & > .content {
    position: relative;
    top: -1em;
  }

  & > h2 {
    position: relative;
    top: -1em;
    margin: 0;
    padding: 6px 10px;
    width: fit-content;
    background-color: ${({ theme }) => theme.color.white};
    font-size: 1.2rem;
  }
  & > .content {
    position: relative;
    top: -0.5em;
    margin: 0;
    padding: 8px 12px;
    background-color: ${({ theme }) => theme.color.white};
    font-size: 1rem;
    letter-spacing: 0.04rem;

    & > p {
      margin: 0;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 94%;
  padding-bottom: ${(100 * 3) / 4}%;
  margin: 0 0 0 auto;
`

const Image = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export default Home
