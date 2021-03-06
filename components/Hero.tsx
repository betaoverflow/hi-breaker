import styles from "../styles/Hero.module.scss";
import Card from "./Card";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className="h-screen flex flex-col justify-center py-10 md:w-5/6 mx-auto">
        <div className="my-auto flex flex-col" style={{ zIndex: 10 }}>
          <p className="md:mt-16 text-2xl md:text-5xl my-2 ml-1 font-bold">
            Hey Hooman 👋
          </p>
          <p className="text-2xl md:text-5xl lg:text-6xl font-medium mt-8 md:mt-24">
            Don't just send <span className="text-red-600">Hello</span>
          </p>
          <p className="text-2xl md:text-5xl lg:text-6xl font-medium mt-4 md:mt-16 mb-24">
            Directly come to the point <span className="">.</span>
          </p>
          <div className="w-4/5 md:w-2/5 mx-auto">
            <Card>
              <h1 className="font-bold text-md md:text-xl">
                Did I do something wrong?
              </h1>
              <p className="text-xl md:text-3xl font-bold mt-3 text-red-600">
                Absolutely
              </p>
            </Card>
          </div>
        </div>
        <div className="self-center">
          <p className={styles.pointer}>👇</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
