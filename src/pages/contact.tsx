import { styled } from "plugins/emotion"
import { Layout } from "components/Layout"
import { Container } from "components/Container"
import {
  SNSCard,
  Title,
  ImageWrapper,
  IconWrapper,
  ScreenName,
  ExternalLink,
} from "components/common/SNSCard"
import { FaLine } from "react-icons/fa"
import { snsLinks } from "constants/links"

const Contact = (): JSX.Element => (
  <Layout>
    <Container>
      <Section>
        <h1>お問い合わせ</h1>
        <p>お問い合わせは、ワスレナ商店公式LINEにて受け付けております。</p>
        <p>
          ご意見・ご要望・お問い合わせの内容により、返答に多少のお時間をいただく場合がございます。また、お答えできない場合もございますので、予めご了承ください。
        </p>
      </Section>
      <Section2>
        <p>ワスレナ商店公式LINEはこちら</p>
        <SNSCard>
          <IconWrapper>
            <FaLine size="1.6rem" />
          </IconWrapper>
          <ImageWrapper>
            <img src="/images/wasurena-logo.png" />
          </ImageWrapper>
          <Title>ワスレナ商店公式LINE</Title>
          <ScreenName>{snsLinks.line.id}</ScreenName>
          <ExternalLink href={snsLinks.line.href}>
            お友だち追加する
          </ExternalLink>
        </SNSCard>
      </Section2>
    </Container>
  </Layout>
)

const Section = styled.section`
  padding: 2rem 0;
`

const Section2 = styled.section`
  padding-bottom: 2rem;
  & > p {
    margin: 0 0 1rem 0;
    text-align: center;
    color: ${({ theme }) => theme.color.secondary};
  }
`

export default Contact
