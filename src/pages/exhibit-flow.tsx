import { styled } from "plugins/emotion"
import { targetBlank } from "constants/targetBlank"
import { Layout } from "components/Layout"
import { Container } from "components/Container"
import { List } from "components/common/List"
import { TextLink } from "components/common/TextLink"

const ExhibitFlow = (): JSX.Element => (
  <Layout>
    <Container>
      <TitleSection>
        <h2>ご出品の流れ</h2>
        <p>ワスレナ商店のご出品の手順は、以下のようになります。</p>
      </TitleSection>

      <Navigation>
        <TableOfContents>
          <Li>
            <a href="#事前審査">事前審査</a>
          </Li>
          <Li>
            <a href="#お持ち込み">お持ち込み</a>
          </Li>
          <Li>
            <a href="#出品物の評定">出品物の評定</a>
          </Li>
          <Li>
            <a href="#販売">販売</a>
          </Li>
          <Li>
            <a href="#精算">精算</a>
          </Li>
        </TableOfContents>
      </Navigation>

      <Section>
        <h2 id="事前審査">一. 事前審査</h2>
        <ImageWrapper>
          <ImgContain src="/images/flow01.jpg" />
        </ImageWrapper>
        <p>
          ワスレナ商店公式ラインにて、出品希望の旨をご連絡いただきます。ご連絡先、お持込ご希望の日時、出品物の概要をお伺いいたします。
        </p>
      </Section>

      <Section>
        <h2 id="お持ち込み">二. お持ち込み</h2>
        <ImageWrapper>
          <ImgCover src="/images/main02.png" />
        </ImageWrapper>
        <p>
          出品カウンター(
          <TextLink href="http://crerass.co.jp/" {...targetBlank}>
            狸小路 蒼氓 店内カウンター
          </TextLink>
          )まで出品物をお持込いただき、スタッフが対応いたします。お持ち込みの際は、以下のものをご持参いただきますよう、お願いいたします。
        </p>
        <p>～ご来店時に持参いただくもの～</p>
        <List>
          <li>出品物</li>
          <li>
            身分証明書(住所、生年月日が記載された有効期限内のもの。例:運転免許証、健康保険証、パスポート等)
          </li>
          <li>
            お振込先口座のわかるもの(例:銀行キャッシュカード、もしくは通帳){" "}
          </li>
        </List>
      </Section>

      <Section>
        <h2 id="出品物の評定">三. 出品物の評定</h2>
        <List>
          <li>出品物の概要</li>
          <li>ご希望の販売価格</li>
          <li>品物にまつわるメッセージ(商品説明)</li>
        </List>
        <p>をお伺いし、評定させていただきます。</p>
        <p className="info">
          ※独自の基準により評定させていただくため、お持込いただいた品物をお預かりできない場合もございます。予めご了承ください。
        </p>
      </Section>

      <Section>
        <h2 id="販売">四. 販売</h2>
        <ImageWrapper>
          <ImgCover src="/images/main03.png" />
        </ImageWrapper>
        <p>
          出品物は、「ワスレナ商店 online
          shop」にて、出品物にまつわるメッセージを添え、6ヶ月間委託にて販売させていただきます。
        </p>
        <p className="info">
          ※お預かりした出品物は、不定期にて開催いたしますイベントにて販売させていただく事もございます。予めご了承ください。
        </p>
      </Section>

      <Section>
        <h2 id="精算">五. 精算</h2>
        <p>
          成約後は、売上の30％を月末締め翌月末払いにてご指定口座にお振込みさせていただきます。
        </p>
      </Section>

      <Blank />
    </Container>
  </Layout>
)

const TitleSection = styled.section`
  padding-top: 2rem;
`

const Navigation = styled.nav`
  padding: 1rem 0 2rem 0;
  margin: 0 1rem;
`

const TableOfContents = styled.ol`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  list-style: none;
  counter-reset: number 0;

  max-width: 380px;
  margin: 0 auto;
  padding: 1.4rem 1.8rem 2rem 1.8rem;
  border-radius: 4px;
  background-color: #f1f1f1;
  color: ${({ theme }) => theme.color.secondary};
`
const Li = styled.li`
  writing-mode: vertical-lr;
  font-weight: bold;
  height: fit-content;

  & > a {
    color: inherit;
    text-decoration: none;
  }

  &::before {
    counter-increment: number 1;
    content: counter(number, cjk-ideographic) "、";
    font-size: 0.9rem;
  }

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background-color: #ccc;
  }
`

const Section = styled.section`
  padding: 2rem 0;

  & > h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 2rem 0;

    &::before,
    &::after {
      flex: 1 1 auto;
      content: "";
      display: inline-block;
      width: 1rem;
      height: 1px;
      background-color: #aaa;
    }
    &::before {
      margin-right: 1rem;
    }
    &::after {
      margin-left: 1rem;
    }
  }

  & > p {
    margin: 2rem 0 0 0;
    font-size: 1rem;
  }

  & > p.info {
    font-size: 0.8rem;
    letter-spacing: 0.03rem;
    color: ${({ theme }) => theme.color.secondary};
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: ${(100 * 3) / 4}%;
  margin: 0 0 0 auto;
`

const ImgContain = styled.img`
  position: absolute;
  object-fit: contain;
  width: 100%;
  height: 100%;
`

const ImgCover = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const Blank = styled.div`
  width: 100%;
  padding: 3em 0;
`

export default ExhibitFlow
