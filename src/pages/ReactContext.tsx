import { useContext, useEffect, useState } from "react";
import TestContext from "../contexts/TestContext";
import ChangeValueComponent from "./ChangeValueComponent";

export default function ReactContext() {
  const { value } = useContext(TestContext);

  return (
    <>
      <h1>HI</h1>
      <p>{value}</p>
      <ChangeValueComponent />
    </>
  );
}
