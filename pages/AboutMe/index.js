import Topnav from "../../components/topnav";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import style from "../../components/styles/aboutme.module.css";
import Footer from "../../components/Footer";
import FotoDiri from "../../public/images/Frame 5.png";
import myValues from "../../public/images/myvalues.png";

export default function AboutMe() {
  return (
    <div>
      <div className={styles.navbar}>
        <Topnav />
      </div>
      <div className={style.container}>
        <div className={style.partOne}>
          <div className={style.textOne}>
            <h1>Snippets About Me</h1>
            <p>
              Hi! My name is Ammar Al Fayyadh and I really passionated about
              improved what Ive done before. I love to hangout, have a chit-chat
              and small talk, that things really make me happy. Beside that,
              knowledge is implied in every conversation.
            </p>
          </div>
        </div>
        <div className={style.img}>
          <Image src={FotoDiri} alt="foto" />
        </div>
      </div>
      <div className={style.partTwo}>
        <Image src={myValues} alt="fotval" />
        <div className={style.textTwo}>
          <h1>Everything is Impossible Until its Done</h1>
          <p>
            This quote hit me so hard, Nelson Mandela wasn’t lie when made this
            quote. It really shape me who I’m right now. Don’t give up till the
            end, you only can give up just when your last breath!
          </p>
          <h1>Eat, Learning, Sleep, Repeat.</h1>
          <p>
            As a Human, we progressed. Nothing happens in one night pal! I am
            always looking for challenge and how to improve myself. I like to
            visiting museum and reading self improvement books when I have spare
            time and sometimes, I practice my english via discord.{" "}
          </p>
          <h1>Show your creativity, but stay humble.</h1>
          <p>
            You know you can be anything you want? yes, that’s the same to show
            your creativity. You can express what you think, nobody can judge
            them. But remember it doesn’t matter who you are respect is number
            one.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
