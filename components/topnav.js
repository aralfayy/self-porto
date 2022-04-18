import styles from "./styles/topnav.module.css";
import Link from "next/link";

export default function Topnav() {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <Link href="../">
          <div className={styles.logoWeb}>AMMAR AL FAYYADH</div>
        </Link>

        <div className={styles.headerWeb}>
          <li>
            <Link href="../AboutMe">
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <a>My Journey</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </div>
      </div>
    </div>
  );
}
