import styles from "../styles/Home.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <a
          href="http://github.com/betaoverflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Betaoverflow
        </a>
      </footer>
    </div>
  );
};

export default Footer;
