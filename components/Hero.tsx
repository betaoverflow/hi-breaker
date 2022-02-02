import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
      <p className={styles.greet}>Hey Hooman 👋</p>
      <p className={styles.greet}>
        Don't just send <span className={styles.highlight}>Hello</span>
      </p>
      <p className={styles.greet}>
        Directly come to the point <span className={styles.highlight}>.</span>
      </p>
    </div>
  );
};

export default Hero;
