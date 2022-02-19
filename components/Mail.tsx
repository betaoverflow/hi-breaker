import styles from "../styles/Mail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const Mail = () => {
  return (
    <div className="mt-24">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Want to know the secret of networking? 😉
      </h1>
      <div className={styles.mail}>
        <input
          type="text"
          className={styles.inputbox}
          placeholder="Enter your email"
        />
        <button type="submit" className={styles.button}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
      <p className={styles.p}>
        Don’t worry{" "}
        <span style={{ fontWeight: "bolder" }}>we won’t send anything</span> to
        you because it takes effort to send newsletters <br /> and
        advertisements and we are lazy
      </p>
    </div>
  );
};
export default Mail;
