import React from "react";
import "./styles.css";

const App = () => {
  const [m, setM] = React.useState(0);
  const onClickMinus5 = () => {
    setM(m - 5);
  };
  const onClickMinus = () => {
    setM(m - 1);
  };
  const onClickPlus = () => {
    setM(m + 1);
  };
  const onClickPlus5 = () => {
    setM(m + 5);
  };
  return (
    <div className="App">
      <p>{m}</p>
      <button onClick={onClickMinus5}>-5</button>
      <button onClick={onClickMinus}>-</button>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickPlus5}>+5</button>
    </div>
  );
};

export default App;
