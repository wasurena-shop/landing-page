import { styled } from "plugins/emotion"
import { FaInstagram } from "react-icons/fa"
import { snsLinks } from "constants/links"
import { targetBlank } from "constants/targetBlank"
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

const News = (): JSX.Element => (
  <Layout>
    <Container>
      <Section>
        <h1>お知らせ</h1>
        <p>
          最新情報は
          <a href={snsLinks.instagram.href} {...targetBlank}>
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
          <ScreenName>{snsLinks.instagram.id}</ScreenName>
          <ExternalLink href={snsLinks.instagram.href}>
            最新情報を確認する
          </ExternalLink>
        </SNSCard>
      </div>
    </Container>
  </Layout>
)

const Section = styled.section`
  padding: 2rem 0;
`

export default News
