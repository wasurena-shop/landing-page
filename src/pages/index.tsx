import Head from "next/head"
import ScrollAnimation from "react-animate-on-scroll"
import { styled } from "plugins/emotion"
import Logo from "../svgs/wasurena-logo-main.svg"
import { ONLINE_SHOP_URL } from "constants/links"
import { targetBlank } from "constants/targetBlank"
import { Layout } from "components/Layout"
import { Container } from "components/Container"
import { TextLink } from "components/common/TextLink"

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>ワスレナ商店 - 人から人へ、思いを添えて</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <BrandInfo className="tsume">
          <ScrollAnimation duration={1.6} animateIn="fadeInUp" animateOnce>
            <Logo />
          </ScrollAnimation>
          <ScrollAnimation
            duration={1.2}
            delay={300}
            animateIn="fadeInUp"
            animateOnce
          >
            <BrandInfoTitle>
              <span>人から人へ、</span>
              <span>思いを添えて</span>
            </BrandInfoTitle>
            <BrandInfoDesc>
              <span>
                <span>手に</span>
                <span>取った</span>
                <span>ものには</span>
              </span>
              <span>
                <span>何らかの</span>
                <span>意味がある。</span>
              </span>
              <span>その意味を、</span>
              <span>
                <span>価値を</span>
                <span>見出す</span>
              </span>
              <span>
                <span>次の人へと</span>
                <span>繋ぐ</span>
              </span>
              <span>
                <span>サスティナブルな</span>
                <span>サイクルを。</span>
              </span>
              <br />
              <span>
                <span>循環する</span>
                <span>ファッションも又、</span>
                <span>ファッションである。</span>
              </span>
            </BrandInfoDesc>
          </ScrollAnimation>
        </BrandInfo>

        <Section>
          <ScrollAnimation duration={1} animateIn="fadeInUp" animateOnce>
            <ImageWrapper>
              <Image src="/images/main01.jpg" />
            </ImageWrapper>
          </ScrollAnimation>
          <ScrollAnimation
            duration={1}
            delay={120}
            animateIn="fadeInUp"
            animateOnce
          >
            <h2>ただ「服を売る」のではない</h2>
            <div className="content">
              <p>
                人から人へと"思い"も共に受け継いでもらう。それがこれからの時代の循環するファッションです。ワスレナ商店は、ただのブランド古着屋ではありません。「物」だけでなく、人と人を繋ぐ架け橋のような場所です。服を愛する人にとって、サスティナブルで、温もりを感じる、全く新しい古着体験を。
              </p>
            </div>
          </ScrollAnimation>
        </Section>

        <Section>
          <ScrollAnimation duration={1} animateIn="fadeInUp" animateOnce>
            <ImageWrapper>
              <Image src="/images/main02.jpg" />
            </ImageWrapper>
          </ScrollAnimation>
          <ScrollAnimation
            duration={1}
            delay={120}
            animateIn="fadeInUp"
            animateOnce
          >
            <h2>ワスレナ商店の特徴</h2>
            <div className="content">
              <p>
                愛用していたけれど、もう着なくなってしまった服、どうせなら大切にしてくれる人に譲りたい。ワスレナ商店では、出品した商品にメッセージを添えることができます。品物にまつわるストーリーを、思い入れを、次の人が受け継ぐ。物だけでなく、人と人が繋がる場所。それがワスレナ商店です。
              </p>
            </div>
          </ScrollAnimation>
        </Section>

        <Section>
          <ScrollAnimation duration={1} animateIn="fadeInUp" animateOnce>
            <ImageWrapper>
              <Image src="/images/main03.jpg" />
            </ImageWrapper>
          </ScrollAnimation>
          <ScrollAnimation
            duration={1}
            delay={120}
            animateIn="fadeInUp"
            animateOnce
          >
            <h2>出品について</h2>
            <div className="content">
              <p>
                出品物と一緒にご出品者の品物に対する思いなどをメッセージとして掲載し、出品物に添えて販売いたします。出品物の価格は、ご出品者の希望を基に決定いたします。出品物は、「
                <TextLink href={ONLINE_SHOP_URL} {...targetBlank}>
                  ワスレナ商店 ONLINE SHOP
                </TextLink>
                」で販売いたします。ご出品者の成約金は、ご指定口座に自動で振込まれます。
              </p>
              <Info>
                <p>
                  ※出品物は委託販売となります。成約後、売上金を月末締め翌月末払いにてご指定口座にお振込させていただきます。
                </p>
              </Info>
            </div>
          </ScrollAnimation>
        </Section>
      </Container>
    </Layout>
  )
}

const BrandInfo = styled.section`
  padding: 3em 0 0;

  svg {
    display: block;
    width: 66%;
    margin: auto;
  }

  @media only screen and (max-height: 700px) {
    padding: 1.8em 0 0;
  }
`

const BrandInfoTitle = styled.h2`
  letter-spacing: 0.04em;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  margin: 0.8em 0;

  span {
    display: inline-block;
  }
`

const BrandInfoDesc = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.7em;
  letter-spacing: 0.04em;
  text-align: center;
  margin: 1em 0 0;

  span {
    display: inline-block;
  }

  @media only screen and (max-height: 700px) {
    font-size: 1rem;
    margin: 0.6em 0 0;
  }
`

const Section = styled.section`
  padding: 4em 0;
  filter: drop-shadow(${({ theme }) => theme.shadow});

  @media only screen and (max-height: 700px) {
    padding: 3em 0;
  }

  h2,
  .content {
    position: relative;
    top: -1em;
  }

  h2 {
    position: relative;
    top: -1em;
    margin: 0;
    padding: 6px 10px;
    width: fit-content;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    font-size: 1.3em;
  }
  .content {
    position: relative;
    top: -0.5em;
    margin: 0;
    padding: 14px 12px;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.secondary};
    font-size: 1rem;
    letter-spacing: 0.04rem;
    line-height: 1.6em;

    & > p {
      margin: 0;
    }
  }
`

const Info = styled.div`
  margin-top: 1.8rem;
  color: ${({ theme }) => theme.color.secondary};
  font-size: 0.8rem;
  letter-spacing: 0.04rem;

  & > p {
    margin: 0;
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
