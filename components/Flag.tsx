import styles from "../styles/Flag.module.scss";
import Card from "./Card";

const Flag = () => {
  return (
    <div className="mt-32">
      <p className="text-2xl md:text-4xl font-bold text-center">
        What made him send you here?{" "}
      </p>
      <div className="mt-24 w-fit mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4">
        <Card>
          <h1>🚩</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            beatae temporibus
          </p>
        </Card>
        <Card>
          <h1>🚩</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            beatae temporibus
          </p>
        </Card>
        <Card>
          <h1>🚩</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            beatae temporibus
          </p>
        </Card>
        <Card>
          <h1>🚩</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            beatae temporibus
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Flag;
