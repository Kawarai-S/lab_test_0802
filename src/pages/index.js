import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "../styles/test.module.scss"
import { comment } from 'postcss';

const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest;

  return (
    <button
      className={active ? "style.active" : "style.inactive"}
      onClick={() => onClick()}
    >
      <br></br>
      <span>•　</span> {/* ここでドットの見た目を設定します。 */}
    </button>
  );
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={style.all}>
      <h1 className={style.title}>成長記録</h1>
      <div>
        <Carousel responsive={responsive} showDots customDot={<CustomDot />}>
          <div className={style.card}>
            <div className={style.photos}>
              <img src="img02.jpg"></img>
            </div>
            <div className={style.comment}>
              <p>うちにくる前のねこ。瞳がこぼれそうで少し不安になる。</p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.photos}>
              <img src="img03.jpg"></img>
            </div>
            <div className={style.comment}>
              <p>うちに来たばかりのねこ。まだ小さくて両の手のひらにおさまるくらいだった。</p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.photos}>
              <img src="img05.jpg"></img>
            </div>
            <div className={style.comment}>
              <p>窓際で日向ぼっこするねこ。翠の瞳が日に透けて美しい。だいぶ大きくなった。</p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.photos}>
              <img src="img06.jpg"></img>
            </div>
            <div className={style.comment}>
              <p>シーツをくしゃくしゃにしてご満悦なねこ。暑くなってからこうして人間のベッドに落ちてることが増えた。</p>
            </div>
          </div>
        </Carousel>
      </div>
      <button className={style.btn}>成長記録を見る</button>
    </div>
  );
}
