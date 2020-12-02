import { styled } from "plugins/emotion"
import Logo from "../svgs/wasurena-logo-main.svg"
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
import { TextLink } from "components/common/TextLink"
import { snsLinks } from "constants/links"
import { targetBlank } from "constants/targetBlank"

const Contact = (): JSX.Element => {
  const line = snsLinks.line
  const LineIcon = line.Icon
  return (
    <Layout>
      <Container>
        <Section>
          <h1>お問い合わせ</h1>
          <p>
            お問い合わせは、
            <TextLink href={line.href} {...targetBlank}>
              ワスレナ商店公式LINE
            </TextLink>
            にて受け付けております。
          </p>
          <p>
            ご意見・ご要望・お問い合わせの内容により、返答に多少のお時間をいただく場合がございます。また、お答えできない場合もございますので、予めご了承ください。
          </p>
        </Section>
        <Section2>
          <p>ワスレナ商店公式LINEはこちら</p>
          <SNSCard className="gothic">
            <IconWrapper>
              <LineIcon size="1.6rem" />
            </IconWrapper>
            <ImageWrapper>
              <Logo />
            </ImageWrapper>
            <Title>ワスレナ商店公式LINE</Title>
            <ScreenName>{line.id}</ScreenName>
            <ExternalLink href={line.href}>お友だち追加する</ExternalLink>
          </SNSCard>
        </Section2>
      </Container>
    </Layout>
  )
}

const Section = styled.section`
  padding: 2rem 0;
`

const Section2 = styled.section`
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  & > p {
    margin: 0 0 1rem 0;
    text-align: center;
    color: ${({ theme }) => theme.color.secondary};
  }
`

export default Contact
