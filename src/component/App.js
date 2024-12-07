//import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

import React, { useState } from "react";

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = buttonName => {
    if (buttonName === "AC") {
      setDisplayValue("0");
      setPreviousValue(null);
      setOperator(null);
    } else if (buttonName === "=") {
      if (previousValue && operator) {
        const currentValue = parseFloat(displayValue);
        let result;
        switch (operator) {
          case "+":
            result = previousValue + currentValue;
            break;
          case "-":
            result = previousValue - currentValue;
            break;
          case "x":
            result = previousValue * currentValue;
            break;
          case "/":
            result = previousValue / currentValue;
            break;
          default:
            break;
        }
        setDisplayValue(String(result));
        setPreviousValue(null);
        setOperator(null);
      }
    } else if (["+", "-", "x", "/"].includes(buttonName)) {
      setOperator(buttonName);
      setPreviousValue(parseFloat(displayValue));
      setDisplayValue("0");
    } else {
      setDisplayValue(prev => (prev === "0" ? buttonName : prev + buttonName));
    }
  };

  return (
    <div className="component-app">
      <Display value={displayValue} />
      <ButtonPanel clickHandler={handleButtonClick} />
    </div>
  );
}
