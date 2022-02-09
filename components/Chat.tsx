import styles from "../styles/Chat.module.scss";
import Card from "./Card";

const Chat = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        So what's the right way?
      </h1>
      <div className={styles.container1}>
        <div className="mx-auto flex flex-row h-full w-full items-center p-8 ">
          <div className="w-96 h-full">
            <Card>
              <p>f</p>
            </Card>
          </div>
          <div className="w-6/12 pl-8 pt-8 self-start leading-7">
            <h1 className="font-semibold text-2xl">bla bla</h1>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              quibusdam totam corrupti aliquam ad, ratione expedita iure velit
              commodi quam labore enim excepturi pariatur sequi libero facilis
              odio esse eius.
            </p>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              quibusdam totam corrupti aliquam ad, ratione expedita iure velit
              commodi quam labore enim excepturi pariatur sequi libero facilis
              odio esse eius.
            </p>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              quibusdam totam corrupti aliquam ad, ratione expedita iure velit
              commodi quam labore enim excepturi pariatur sequi libero facilis
              odio esse eius.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className="mx-auto flex flex-row h-full w-full items-center p-8 justify-between">
          <div className="w-6/12  pt-8 self-start leading-7">
            <h1 className="font-semibold text-2xl">bla bla</h1>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              quibusdam totam corrupti aliquam ad, ratione expedita iure velit
              commodi quam labore enim excepturi pariatur sequi libero facilis
              odio esse eius.
            </p>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              quibusdam totam corrupti aliquam ad, ratione expedita iure velit
              commodi quam labore enim excepturi pariatur sequi libero facilis
              odio esse eius.
            </p>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              quibusdam totam corrupti aliquam ad, ratione expedita iure velit
              commodi quam labore enim excepturi pariatur sequi libero facilis
              odio esse eius.
            </p>
          </div>
          <div className="w-96 h-full">
            <Card>
              <p>f</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
