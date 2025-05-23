import { useState } from "react";
export const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClear = () => {//clear input
    setInput("");
  };

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="calculator-container">
      <div className="display">{input || "0"}</div>
      <div className="buttons-grid">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className="button"
            onClick={() => {
              btn === "=" ? handleCalculate() : handleClick(btn);
            }}
          >
            {btn}
          </button>
        ))}
        <button className="button clear-button" onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
};
