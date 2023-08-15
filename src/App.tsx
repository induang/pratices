import { Outlet } from "react-router-dom";
import TextContext from "./contexts/TestContext";
import { useState } from "react";

function App() {
  const [test, setTest] = useState("");
  return (
    <TextContext.Provider value={{ value: test, setValue: setTest }}>
      <div className="App">
        <Outlet />
      </div>
    </TextContext.Provider>
  );
}

export default App;
