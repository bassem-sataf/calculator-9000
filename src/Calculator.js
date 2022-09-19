import AmazingNumberButton from "./AmazingNumberButton.js";
import BeautifulScreen from "./BeautifulScreen.js";
import GreatOperationButton from "./GreatOperationButton.js";
import MagnificientEqualButton from "./MagnificientEqualButton.js";
import ItSOverNineThousand from "./ItSOverNineThousand.js";

import React, { useState } from 'react';

function Calculator()
{

    const [screen, setScreen] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (e) => {
      setScreen(screen + e.target.getAttribute('value'));
    }

    const handleEqual = () => { 
      
    setResult( <ItSOverNineThousand value= {eval(screen)} /> );

    }

    const handleOpe = (e) => {
      e.preventDefault();
      setScreen(screen + e.target.getAttribute('value'));
    }

    const handleDel = () => {
      setScreen('')
    }



    return (
        <div>
    
            <div className= 'screen'>
              <BeautifulScreen result = {result} calc = {screen} />
            </div>
            <div className= 'numbers'>
             <AmazingNumberButton onClick={handleClick} />
            </div>   
            <div className= 'operator'>
              <GreatOperationButton onClick={handleOpe}/>
            </div>
            <div className="equal">
              <MagnificientEqualButton onClick={handleEqual}/>
            </div>
            <div className="del">
              <button onClick={handleDel}>Del</button>
            </div>

        </div> 
      )
}

export default Calculator;