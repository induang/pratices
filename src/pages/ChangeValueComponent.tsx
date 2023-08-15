import { useContext } from "react";
import TestContext from "../contexts/TestContext";

export default function ChangeValueComponent() {
  const { setValue } = useContext(TestContext);

  const handleClick = () => {
    console.log("click");
    setValue("See you");
  };

  return <button onClick={handleClick}>Change</button>;
}
