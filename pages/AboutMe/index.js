import Topnav from "../../components/topnav";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import style from "../../components/styles/aboutme.module.css";
import Footer from "../../components/Footer";
import FotoDiri from "../../public/images/Frame 5.png";

export default function AboutMe() {
  return (
    <div>
      <div className={styles.navbar}>
        <Topnav />
      </div>
      <div className={style.container}>
        <div className={style.partOne}>
          <h1>Snippets About Me</h1>
          <p>
            Hi! My name is Ammar Al Fayyadh and I really passionated about
            improved what Ive done before. I love to hangout, have a chit-chat
            and small talk, that things really make me happy. Beside that,
            knowledge is implied in every conversation.
          </p>
        </div>
        <div className={style.img}>
          <Image
            src={FotoDiri}
            alt="foto"
            // width={100}
            // height={100}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
