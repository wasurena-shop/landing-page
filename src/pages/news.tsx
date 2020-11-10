import { styled } from "plugins/emotion"
import { snsLinks } from "constants/links"
import { targetBlank } from "constants/targetBlank"
import { Layout } from "components/Layout"
import { Container } from "components/Container"
import {
  SNSCard,
  IconWrapper,
  InstaImageWrapper,
  ImageWrapper,
  Title,
  ScreenName,
  ExternalLink,
} from "components/common/SNSCard"
import { TextLink } from "components/common/TextLink"

const News = (): JSX.Element => {
  const instagram = snsLinks.instagram
  const InstaIcon = instagram.Icon
  const line = snsLinks.line
  const LineIcon = line.Icon

  return (
    <Layout>
      <Container>
        <Section>
          <h1>お知らせ</h1>
          <p>
            最新情報は
            <TextLink href={instagram.href} {...targetBlank}>
              公式インスタグラム
            </TextLink>
            または
            <TextLink href={line.href} {...targetBlank}>
              ワスレナ商店公式LINE
            </TextLink>
            にて随時配信しております。
          </p>
        </Section>
        <Section2>
          <SNSCard>
            <IconWrapper>
              <InstaIcon />
            </IconWrapper>
            <InstaImageWrapper>
              <img src="/images/wasurena-logo.png" />
            </InstaImageWrapper>
            <Title>ワスレナ商店</Title>
            <ScreenName>{instagram.id}</ScreenName>
            <ExternalLink href={instagram.href}>
              <Block>最新情報を</Block>
              <Block>確認する</Block>
            </ExternalLink>
          </SNSCard>

          <SNSCard>
            <IconWrapper>
              <LineIcon />
            </IconWrapper>
            <ImageWrapper>
              <img src="/images/wasurena-logo.png" />
            </ImageWrapper>
            <Title>ワスレナ商店公式LINE</Title>
            <ScreenName>{line.id}</ScreenName>
            <ExternalLink href={line.href}>お友達追加する</ExternalLink>
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
  display: flex;
  overflow-x: auto;
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  & > div {
    margin-right: 2rem;
  }
`

const Block = styled.span`
  display: inline-block;
`

export default News
