import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './components/quotes.json'

let arrayColors = ['#ff0000','#A93927', '#5DB6E3', '#364287', '#C07DA0', '#4BC664', '#2A5D7D', '#BC1F86', '#CEB6FC', '#E80749', '#4EBA01'];

function App() {

  const createNumberRandom = array => {
    return Math.floor(Math.random()* array.length)
  };

  const getElementsRandom = array => {
    const i = createNumberRandom(array);
    return array[i];
  };

  const [userRandom, setuserRandom] = useState(getElementsRandom(quotes));
  const [colorRandom, setcolorRandom] = useState(getElementsRandom(arrayColors));
  
  const clickButton = () => {
    setuserRandom(getElementsRandom(quotes));
    setcolorRandom(getElementsRandom(arrayColors));
  }

  let appStyle = {
    backgroundColor: colorRandom
  };
  let buttonStyle = {
    backgroundColor: colorRandom
  };
  let comaStyle = {
    color: colorRandom
  }

  return (
    <div style={appStyle} className="App">
      <QuoteBox
      userRandom={userRandom}
      buttonStyle={buttonStyle}
      comaStyle={comaStyle}
      clickButton={clickButton}/>
    </div>
  )
}

export default App
