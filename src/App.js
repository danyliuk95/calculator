import './App.css';
import CalcButton from './components/CalcButton';
import CalcDisplay from './components/CalcDisplay';
import { useState } from 'react';

function App() {
  const [displayText, setDisplayText] = useState('');

  const buttonClick = (event) => {
    setDisplayText(displayText + event.target.textContent);
  }
  const deleteButton = () => {
    setDisplayText(displayText.substring(0, displayText.length - 1))
  }

  const sumButton = () => {
    // setDisplayText(eval(displayText)) // easy variant

    let numbers;
    const searchPlus = "+";
    const searchMinus = "-";
    const searchDevide = "/";
    const searchMultiply = "*";

    if (displayText.indexOf(searchPlus) !== -1) {
      numbers = displayText.split("+");
      setDisplayText(String(parseInt(numbers[0]) + parseInt(numbers[1])));
    } else if (displayText.indexOf(searchMinus) !== -1) {
      numbers = displayText.split("-");
      setDisplayText(String(parseInt(numbers[0]) - parseInt(numbers[1])));
    } else if (displayText.indexOf(searchDevide) !== -1){
      numbers = displayText.split("/");
      setDisplayText(String(parseInt(numbers[0]) / parseInt(numbers[1])));
    } else if (displayText.indexOf(searchMultiply) !== -1) {
      numbers = displayText.split("*");
      setDisplayText(String(parseInt(numbers[0]) * parseInt(numbers[1])));
    }
  }

  return (
    <div className="App">
      <CalcDisplay text={displayText} />
      <div className="calcButtonsContainer">
        <div className="buttonsRow">
          <CalcButton text="1" onClick={buttonClick} />
          <CalcButton text="2" onClick={buttonClick} />
          <CalcButton text="3" onClick={buttonClick}/>
        </div>
        <div className="buttonsRow">
          <CalcButton text="4" onClick={buttonClick} />
          <CalcButton text="5" onClick={buttonClick} />
          <CalcButton text="6" onClick={buttonClick} />
        </div>
        <div className="buttonsRow">
          <CalcButton text="7" onClick={buttonClick} />
          <CalcButton text="8" onClick={buttonClick} />
          <CalcButton text="9" onClick={buttonClick} />
        </div>
        <div className="buttonsRow">
          <CalcButton text="0" onClick={buttonClick} />
          <CalcButton className="wideButton" text="=" onClick={sumButton} />
          <CalcButton className="wideButton" text="C" onClick={deleteButton}/>
        </div>
        <div className="buttonsRow">
          <CalcButton text="+" onClick={buttonClick} />
          <CalcButton text="-" onClick={buttonClick} />
          <CalcButton text="*" onClick={buttonClick} />
          <CalcButton text="/" onClick={buttonClick} />
        </div>
      </div>

    </div>
  );
}

export default App;
