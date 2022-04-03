import Head from "next/head";
import Image from "next/image";
import Fotohero from "../assets/images/fotohero.png";
import Topnav from "../components/topnav";

import styles from "../styles/Home.module.css";

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
          <div className={styles.Main1}>halo</div>
          <div className={styles.area1}></div>
          <div className={styles.area2}></div>
          <div className={styles.area3}></div>
          <div className={styles.area4}></div>
        </div>
      </div>
      <div className={styles.partFour}>
        <div className={styles.rectangle}></div>
        <div className={styles.textShape2}>
          <h1> My Skill</h1>
          <div></div>
          <div></div>
          <p>
            <div className={styles.circ}>
              <img
                className={styles.imgCirc}
                width={100}
                height={100}
                src="https://icon-library.com/images/html-icon-png/html-icon-png-4.jpg"
              ></img>
            </div>
            HTML
          </p>
          <p>
            <div className={styles.circ}></div>CSS
          </p>
          <p>ReactJS</p>
          <p>NextJS</p>
          <p>Vue JS</p>
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
}
