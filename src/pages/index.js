import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "../styles/test.module.scss"

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
    <div>
      <h1>INTERVIEW</h1>
      <div>
        <Carousel responsive={responsive}>
          <div className={style.card}>
            <div className={style.photos}>
              <img src="img01.jpg"></img>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.photos}>
              <img src="img02.jpg"></img>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.photos}>
              <img src="img03.jpg"></img>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.photos}>
              <img src="img04.png"></img>
            </div>
            <div>
              <p>ジーズアカデミーで 得た</p>
              <p>新しいコミュニティが</p>
              <p>異業種からエンジニア</p>
              <p>転職のきっかけに。</p>
            </div>
          </div>
        </Carousel>
      </div>
      <button className={style.btn}>記事一覧を見る</button>
    </div>
  );
}
