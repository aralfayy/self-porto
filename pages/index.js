import Head from "next/head";
import Image from "next/image";
import Fotohero from "../assets/images/fotohero.png";
import Topnav from "../components/topnav";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import SkillPhoto from "../assets/images/skill.png";

export default function Home() {
  return (
    <div>
      <div className={styles.navbar}>
        <Topnav />
      </div>
      <div className={styles.container}>
        <div className={styles.partOne}>
          <div className={styles.content}>
            <h1>
              Hi, I'm <span className={styles.namePriv}>Ammar Al Fayyadh</span>
            </h1>
            <p className={styles.subTitle}>
              Front-End Developer | UI/UX Designer based on Bandung, Indonesia
            </p>
            <p className={styles.descP}>
              Newcomer UI/UX Designer based in Bandung, Indonesia involved in
              project quite much. Passionate person for monitoring design trend
              and love to try something new everyday.
            </p>
            <div className={styles.buttonHero}>
              <button className={styles.button1}>Hire Me</button>
              <button className={styles.button2}>About Me</button>
            </div>
          </div>
          <div className={styles.img}>
            <Image src={Fotohero} alt="foto" />
          </div>
        </div>
      </div>
      <div className={styles.partTwo}>
        <div className={styles.rectangle}></div>
        <div className={styles.textShape}>
          <h1>1+</h1>
          <div className={styles.fPart}></div>
          <div></div>
          <div className={styles.fPart}></div>
          <div className={styles.yearsDef}>
            Years
            <br />
            Experience
            <br />
            Working
          </div>
          <div className={styles.par}>
            <div className={styles.chilUI}>UI/UX Design</div>
          </div>
          <div className={styles.par}>
            <div className={styles.chilFE}>Frontend Developer</div>
          </div>
          <div className={styles.par}>
            <div className={styles.chilGD}>Graphic Design</div>
          </div>
          <h2>
            My <br />
            Experience
          </h2>
          <div></div>
          <div className={styles.par}></div>
        </div>
      </div>
      <div className={styles.partThree}>
        <div className={styles.titleThree}>
          <h1>Recent Work</h1>
        </div>
        <div className={styles.gridThree}>
          <div
            onClick={() => {
              window.open(
                "https://www.figma.com/proto/LcAZ1rxvX62WC01sXzLuxD/Sanbercode---Mental-Health?page-id=148%3A2135&node-id=174%3A2979&viewport=241%2C48%2C0.13&scaling=scale-down&starting-point-node-id=174%3A2979&show-proto-sidebar=1",
                "_blank"
              );
            }}
            className={styles.Main1}
          ></div>

          <div
            onClick={() => {
              window.open("https://double3.vercel.app/", "_blank");
            }}
            className={styles.area1}
          ></div>

          <div className={styles.area2}></div>
          <div className={styles.area3}></div>
          <div className={styles.area4}></div>
        </div>
      </div>
      <div className={styles.partFour}>
        <div className={styles.rectangle2}>
          {/* <Image src={SkillPhoto} alt="foto" style={{ width: "100vw" }} /> */}
        </div>
        <div className={styles.textShape2}>
          <h1> Skills</h1>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
