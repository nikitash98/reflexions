import React, { useEffect, useState, useRef} from 'react';

import "./Survey.css"
import useMousePosition from './Components/useMousePosition';

export default function Survey_Run(props) {
    const [selectedOption, setSelectedOption] = useState(null);

    const [positioned, setPositioned] = useState(null);
    const [newpositioned, setNewPositioned] = useState(null);

    const [showButton, setShowButton] = useState(false);

    const mousePosition = useMousePosition();

    const curPositions = useState();

    const optionPositions = useRef([])
    let originalPositions = []


    useEffect(()=> {
      setSelectedOption(null)

      const timer = setTimeout(() => {
        setShowButton(true);
      }, 6000); // Change 3000 to the desired delay in milliseconds
  

    })
    useEffect(()=> {
      for(let i=0; i < 5; i++) {
        originalPositions.push([600 + i * 200, window.innerHeight/2 + 50]);
        optionPositions.current.push([600 + i * 200, window.innerHeight/2 + 50])
      }
      setPositioned(originalPositions)
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
    

    return (<>
      <div className='survey-container run-container'>
        <h2>{props.question}</h2>
        <div>
        </div>
      </div>

      {options.reverse().map((option, index) => {

        if( positioned && positioned.length > 0) {
        /*
        let originalPosition = originalPositions[index]
        let maxDistance = 100;
        */

        let distanceOfEffect = props.radius;

        let xDistance = optionPositions.current[index][0] - mousePosition.x;
        let yDistance =  optionPositions.current[index][1] - mousePosition.y;
        
        let totalDistance = Math.sqrt(Math.pow(xDistance, 2.0) + Math.pow(yDistance, 2.0));
        
        
        let effectDistanceStrength = distanceOfEffect - totalDistance;
        effectDistanceStrength = Math.max(effectDistanceStrength, 0.0);

        effectDistanceStrength /= distanceOfEffect;

        let effectStrength = 50.0;
        xDistance = xDistance * effectDistanceStrength * effectStrength;
        yDistance = yDistance * effectDistanceStrength * effectStrength;

        optionPositions.current[index][0] += xDistance * 0.01;
        optionPositions.current[index][1] += yDistance * 0.01;

        let returnPositionX = positioned[index][0] - optionPositions.current[index][0];
        let returnPositionY = positioned[index][1] - optionPositions.current[index][1];


        let returnPositionDistance = Math.sqrt(Math.pow(returnPositionX, 2.0) + Math.pow(returnPositionY, 2.0))

        optionPositions.current[index][0] += returnPositionX *= 0.0001 * returnPositionDistance;
        optionPositions.current[index][1] += returnPositionY *= 0.0001 * returnPositionDistance;


        return (
        <>
        <div className='selection-container-absolute' style={{"left" : optionPositions.current[index][0] + "px", "top": optionPositions.current[index][1] + "px"}}>
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
        )
      }


        
      })}    


            <button className={showButton ? 'nextButton' : 'nextButton nextButtonHidden'} onClick={props.goLeft}>
              <img src = "icon/rightArrow.svg"/>
            </button>

    </>


    );

}
  