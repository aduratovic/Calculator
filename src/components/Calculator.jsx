import { useState, useEffect } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const handleCalculation = () => {
    if (num1 !== "" && num2 !== "") {
      if (operator === "+") {
        return parseInt(num1) + parseInt(num2);
      } else if (operator === "-") {
        return parseInt(num1) - parseInt(num2);
      } else if (operator === "/") {
        return parseInt(num1) / parseInt(num2);
      } else {
        return parseInt(num1) * parseInt(num2);
      }
    } else {
      return "Please Enter Numbers";
    }
  };

  useEffect(() => {
    setResult(handleCalculation());
  }, [num1, num2, operator]);

  return (
    <div className="container">
      <h1>Add with React!</h1>
      <form>
        <input
          onChange={(e) => {
            setNum1(e.target.value);
          }}
          type="number"
          name="value1"
          value={num1}
        />
        <select
          onChange={(e) => {
            setOperator(e.target.value);
          }}
          name=""
          id=""
          defaultValue={operator}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select>
        <input
          onChange={(e) => {
            setNum2(e.target.value);
          }}
          value={num2}
          type="number"
          name="value2"
        />
        <span className="equal-sign">=</span>
        <h3 className="result-box">{result} </h3>
      </form>
    </div>
  );
};

export default Calculator;
