import styles from "../styles/Hero.module.scss";
import Card from "./Card";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center py-18 md:w-5/6 mx-auto">
      <div className="my-auto flex flex-col">
        <p className="text-2xl md:text-4xl my-2 ml-1 font-bold">
          Hey Hooman 👋
        </p>
        <p className="text-3xl md:text-7xl font-semibold mt-16">
          Don't just send <span className={styles.highlight}>Hello</span>
        </p>
        <p className="text-3xl md:text-7xl font-semibold mt-4 mb-24">
          Directly come to the point <span className="">.</span>
        </p>
        <Card />
      </div>
      <div className="self-center">
        <p className={styles.pointer}>👇</p>
      </div>
    </div>
  );
};

export default Hero;
