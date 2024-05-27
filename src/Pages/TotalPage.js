import React, { useEffect, useState, useRef } from 'react';
import KaleidoscopePage from './KaleidoscopePage';
import Survey from '../Survey';
const  TotalPage = (props) => {

    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
  
    const [videoLoaded, setVideoLoaded] = useState(false);
    let mediaStream = null;

    const [nextBox, setNextBox] = useState(false);

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
      'Strongly Agree',
      'Somewhat Agree',
      'Neutral',
      'Somewhat Disagree',
      'Strongly Disagree'
    ];

    useEffect(() => {
        const constraints = { video: true };
    
        // Access webcam
        navigator.mediaDevices.getUserMedia(constraints)
          .then(stream => {
            // Save the stream to use later
            mediaStream = stream;
    

            // Display the stream in the first video element
            if (videoRef1.current) {
                console.log(videoRef1.current)
              videoRef1.current.srcObject = stream;
            }
    
            // Display the stream in the second video element
            if (videoRef2.current) {
                console.log(videoRef2.current)
              videoRef2.current.srcObject = stream;
            }
          })
          .catch(error => {
            console.error('Error accessing webcam:', error);
          });
    
        // Cleanup function
        return () => {
          if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop());
          }
        };
      }, [videoLoaded]);

    useEffect(()=> {
      const timer = setTimeout(() => {
        setNextBox(true);
      }, 8000); // Change 3000 to the desired delay in milliseconds

    }, [])

    const handleOptionChange = (option) => {
      setSelectedOption(option);
      props.goLeft()
    };

    
    return (
        <>

        <div>

        </div>


        <button onClick={props.goLeft}>
          TEST
        </button>

        {options.reverse().map((option, index) => (

            <>
              <KaleidoscopePage setVideoLoaded= {setVideoLoaded} startPosition = {[0, 0]} videoRef = {videoRef1} speedRun = {1}> 

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
            </KaleidoscopePage>
            </>
            
          ))}

        {/*
        <KaleidoscopePage setVideoLoaded= {setVideoLoaded} startPosition = {[0, 0]} videoRef = {videoRef1} speedRun = {1}> 
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



        </KaleidoscopePage>
        <KaleidoscopePage setVideoLoaded= {setVideoLoaded} startPosition = {[500, 500]} videoRef = {videoRef2} speedRun = {1}>
          <Survey question = {"The web is tangible."} goLeft = {props.goLeft}/>
        </KaleidoscopePage>
        <KaleidoscopePage setVideoLoaded= {setVideoLoaded} startPosition = {[800, 500]} videoRef = {videoRef2} speedRun = {1}>
          <Survey question = {"The web is tangible."} goLeft = {props.goLeft}/>
        </KaleidoscopePage>
        <KaleidoscopePage setVideoLoaded= {setVideoLoaded} startPosition = {[200, 800]} videoRef = {videoRef2} speedRun = {1}> 
          <Survey question = {"The web is tangible."} goLeft = {props.goLeft}/>
        </KaleidoscopePage>

        <KaleidoscopePage setVideoLoaded= {setVideoLoaded} startPosition = {[1000, 20]} videoRef = {videoRef2} speedRun = {1}>
          <Survey question = {"The web is tangible."} goLeft = {props.goLeft}/>
        </KaleidoscopePage>
        */}

        <KaleidoscopePage setVideoLoaded= {setVideoLoaded} startPosition = {[600, 0]} videoRef = {videoRef2} speedRun = {0}>
          <h1>Some things are obvious.</h1>
        </KaleidoscopePage>

        {nextBox && (

        <KaleidoscopePage setVideoLoaded= {setVideoLoaded} startPosition = {[600, 400]} videoRef = {videoRef2} speedRun = {0}>
            <button onClick={props.goLeft}>
                <img src = "icon/rightArrow.svg" style={{width: "25px"}}/>
            </button>
        </KaleidoscopePage>
        )}

      
        </>

    )

}

export default TotalPage