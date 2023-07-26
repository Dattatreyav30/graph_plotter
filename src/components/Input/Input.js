import { useState } from "react";
import "./Input.css";

const Input = () => {
  const [input, setInput] = useState("");
  const [max, setMax] = useState("");
  const [percentage, setPercentage] = useState(0);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const maxHandler = (e) => {
    setMax(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isNaN(input) || isNaN(max)) {
      alert("Please enter only numbers");
    } else if (input > max) {
      alert("Input cannot be greater than max value");
      return;
    } else {
      setPercentage((parseFloat(input) / parseFloat(max)) * 100);
      setInput("");
      setMax("");
    }
  };

  return (
    <>
      <h2>Graph Plotter</h2>
      <form className="form" onSubmit={onSubmitHandler}>
        <input
          value={input}
          onChange={inputHandler}
          type="text"
          name="inputValue"
          required
          placeholder="Input value"
        />
        <input
          value={max}
          onChange={maxHandler}
          type="text"
          name="maxValue"
          required
          placeholder="Max value"
        />
        <button>Submit</button>
      </form>
      <div className="graphContainer">
        <div className="inputBar" style={{ height: percentage + "%" }}></div>
        <div className="maxBar" style={{ height: "100%" }}></div>
        <p style={{ textAlign: "center" }}>{parseInt(percentage)}%</p>
      </div>
    </>
  );
};

export default Input;
