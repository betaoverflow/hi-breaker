import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-between py-24 px-16">
      <div className="my-auto">
        <p className="text-4xl my-2">Hey Hooman 👋</p>
        <p className="text-8xl my-3">
          Don't just send <span className={styles.highlight}>Hello</span>
        </p>
        <p className="text-8xl my-3">
          Directly come to the point <span className="">.</span>
        </p>
      </div>
      <div className="self-center">
        <p className={styles.pointer}>👇</p>
      </div>
    </div>
  );
};

export default Hero;
