import React from "react";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import "./App.css";

const App = () => {
  return (
    <main className="react-calculator">
      <Result value={undefined} />
      <Numbers onClickNumber={(number) => console.log("Number:", number)} />
      <Functions
        onContentClear={() => console.log("Clear")}
        onDelete={() => console.log("onDelete")}
      />
      <MathOperations
        onClickOperation={(operation) => console.log("Operations:", operation)}
        onClickEqual={(equal) => console.log("Igual:", equal)}
      />
    </main>
  );
};

export default App;
