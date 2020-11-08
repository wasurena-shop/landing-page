import { styled } from "plugins/emotion"
import { FaInstagram } from "react-icons/fa"
import { Layout } from "components/Layout"
import { Container } from "components/Container"
import {
  SNSCard,
  IconWrapper,
  InstaImageWrapper,
  Title,
  ScreenName,
  ExternalLink,
} from "components/common/SNSCard"

const insta_url = "https://instagram.com/sobo_sapporo"
const rel = "noopener noreferrer"

const News = (): JSX.Element => (
  <Layout>
    <Container>
      <Section>
        <h1>お知らせ</h1>
        <p>
          最新情報は
          <a target="_blank" href={insta_url} rel={rel}>
            公式インスタグラム
          </a>
          または<a>ワスレナ商店公式LINE</a>にて随時配信しております。
        </p>
      </Section>
      <div>
        <SNSCard>
          <IconWrapper>
            <FaInstagram />
          </IconWrapper>
          <InstaImageWrapper>
            <img src="/images/sobo-logo.png" />
          </InstaImageWrapper>
          <Title>蒼氓(そうぼう)</Title>
          <ScreenName>sobo_sappro</ScreenName>
          <ExternalLink href={insta_url}>最新情報を確認する</ExternalLink>
        </SNSCard>
      </div>
    </Container>
  </Layout>
)

const Section = styled.section`
  padding: 2rem 0;
`

export default News
