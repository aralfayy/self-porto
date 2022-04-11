import styles from "./styles/footer.module.css";
export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Let’s connect</h1>
          <p>
            {" "}
            Get in touch for opportunities or maybe hang for small talk. 😉
          </p>
        </div>
      </div>
    </>
  );
}
