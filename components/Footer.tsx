import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        Based on the concept{" "}
        <a href="https://web.archive.org/web/20131127020115/http://www.nohello.com/">
          No Hello
        </a>
      </div>
      <br />
      <div>
        Incase you were unable to understand what all these means, it implies
        don't just send greetings do add the reason you are texting. With love
        from <a href="https://github.com/betaoverflow">Betaoverflow</a>
      </div>
    </footer>
  );
};

export default Footer;
