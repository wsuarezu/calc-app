/* eslint no-eval: 0 */
import React, { useState } from "react";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import words from "lodash.words";
import "./App.css";

const App = () => {

    const [statck, setStatck] = useState("");
    const items = words(statck, /[^-^+^*^/]+/g);
    const value = items.length > 0 ? items[items.length-1] : "0";

  return (
    <main className="react-calculator">
      <Result value={value} />
      <Numbers onClickNumber={(number) => setStatck(statck + number)} />
      <Functions
        onContentClear={() => setStatck("")}
        onDelete={() => {
            if(statck.length > 0){
                const newStatck = statck.substring(0, statck.length - 1);
                setStatck(newStatck);
            }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => setStatck(statck + operation)}
        onClickEqual={(equal) => setStatck(eval(statck).toString())}
      />
    </main>
  );
};

export default App;
