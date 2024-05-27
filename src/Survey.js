import React, { useEffect, useState } from 'react';

import "./Survey.css"
export default function Survey(props) {
    const [selectedOption, setSelectedOption] = useState(null);


    useEffect(()=> {
      setSelectedOption(null)

    }, [])
    const options = [
      'Strongly Agree',
      'Somewhat Agree',
      'Neutral',
      'Somewhat Disagree',
      'Strongly Disagree'
    ];
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        props.goLeft()
      };
    
  
    return (
      <div className='survey-container'>
        <h2>{props.question}</h2>
        <div>

          {options.reverse().map((option, index) => (
            <>
            <div className='selection-container'>

                <label key={index}>
                    {option}
                </label>
                <br/>
                <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                    />
            </div>
            </>
            
          ))}
        </div>
      </div>
    );

}
  