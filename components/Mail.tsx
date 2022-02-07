import styles from "../styles/Mail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const Mail = () => {
  return (
    <div className="mt-24">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        want to know the secret of networking
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
      <p className={styles.p}>don’t worry we won’t be sending you anything.</p>
    </div>
  );
};
export default Mail;
