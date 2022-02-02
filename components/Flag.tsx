import styles from "../styles/Flag.module.scss";

const Flag = () => {
  return (
    <div className={styles.container}>
      <p className={styles.question}>Did I do something wrong?</p>
      <p className={styles.answer}>Absolutely 😤</p>
      <p className={styles.question}>Curious what made him send you here? </p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h1> 🚩 Reason </h1>
        </div>
        <div className={styles.card}>
          <h1> 🚩 Reason </h1>
        </div>
        <div className={styles.card}>
          <h1> 🚩 Reason </h1>
        </div>
        <div className={styles.card}>
          <h1> 🚩 Reason </h1>
        </div>
      </div>
    </div>
  );
};

export default Flag;
