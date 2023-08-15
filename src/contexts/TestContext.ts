import { createContext } from "react";

interface TestContextParamsModel {
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const TestContext = createContext({} as TestContextParamsModel);
export default TestContext;
