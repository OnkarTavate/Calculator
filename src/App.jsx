import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClicked = (event) => {
    const newCalVal = event.target.innerText;
    if(newCalVal === 'C'){
      setCalVal("");
    }else if (newCalVal === '='){
      const result = eval(calVal);
      setCalVal(result);
    }else{
      const newDispVal = calVal + newCalVal;
      setCalVal(newDispVal);
    }
  } 
  
  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} />
      <ButtonContainer buttonClicked={onButtonClicked} />
    </div>
  );
}

export default App;
