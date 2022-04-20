import Topnav from "../../components/topnav";
import Image from "next/image";
import Fotopro from "../../public/images/Frame 5.png";
import styles from "../../styles/Home.module.css";
import style from "../../components/styles/aboutme.module.css";
import Footer from "../../components/Footer";

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
            improved what I’ve done before. I love to hangout, have a chit-chat
            and small talk, that things really make me happy. Beside that,
            knowledge is implied in every conversation.
          </p>
          <div className={style.img}>
            <Image src={Fotopro} alt="foto" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
