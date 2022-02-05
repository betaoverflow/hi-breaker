import styles from "../styles/Flag.module.scss";
import Card from "./Card";

const Flag = () => {
  return (
    <div className="h-screen mt-32">
      <p className="text-4xl font-bold text-center">
        What made him send you here?{" "}
      </p>
      <div className="mt-24 md:w-3/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Flag;
