import { Layout } from "components/Layout"
import { Container } from "components/Container"

const ExhibitFlow = (): JSX.Element => (
  <Layout>
    <Container>
      <section>
        <h2>ご出品の流れ</h2>
        <p>ワスレナ商店のご出品の手順は、以下のようになります。</p>
      </section>

      <section>
        <h2>一.事前審査</h2>
        <img src="A" alt="" />
        <p>
          ワスレナ商店公式ラインにて、出品希望の旨をご連絡いただきます。ご連絡先、お持込ご希望の日時、出品物の概要をお伺いいたします。
        </p>
      </section>

      <section>
        <h2>二.お持ち込み</h2>
        <img src="B" alt="" />
        <p>
          出品カウンター(狸小路 蒼氓
          店内カウンター(←そうぼうのサイトのリンク))まで出品物をお持込いただき、スタッフが対応いたします。お持ち込みの際は、以下のものをご持参いただきますよう、お願いいたします。
        </p>
        <p>～ご来店時に持参いただくもの～</p>
        <ul>
          <li>出品物</li>
          <li>
            身分証明書(住所、生年月日が記載された有効期限内のもの。例:運転免許証、健康保険証、パスポート等)
          </li>
          <li>
            お振込先口座のわかるもの(例:銀行キャッシュカード、もしくは通帳){" "}
          </li>
        </ul>
      </section>

      <section>
        <h2>三.出品物の評定</h2>
        <img src="C" alt="" />
        <ul>
          <li>出品物の概要</li>
          <li>ご希望の販売価格</li>
          <li>品物にまつわるメッセージ(商品説明)</li>
        </ul>
        <p>をお伺いし、評定させていただきます。</p>
        <p className="info">
          ※独自の基準により評定させていただくため、お持込いただいた品物をお預かりできない場合もございます。予めご了承ください。
        </p>
      </section>

      <section>
        <h2>四.販売</h2>
        <img src="D" alt="" />
        <p>
          出品物は、「ワスレナ商店 online
          shop」にて、出品物にまつわるメッセージを添え、6ヶ月間委託にて販売させていただきます。
        </p>
        <p className="info">
          ※お預かりした出品物は、不定期にて開催いたしますイベントにて販売させていただく事もございます。予めご了承ください。
        </p>
      </section>

      <section>
        <h2>五.精算</h2>
        <img src="E" alt="" />
        <p>
          成約後は、売上の30％を月末締め翌月末払いにてご指定口座にお振込みさせていただきます。
        </p>
      </section>
    </Container>
  </Layout>
)

export default ExhibitFlow
