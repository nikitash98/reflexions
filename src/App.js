import logo from './logo.svg';
import './App.css';

import Webcam from "react-webcam";

import React, { Suspense, useState, useRef, useEffect } from 'react';
import Survey from './Survey';
import HomePage from './Pages/Homepage';
import Poetry from './Pages/Poetry';
import Interstitial from './Interstitial';
import ThreeCanvas from './3D/ThreeCanvas';
import MovingFace from './3D/MovingFace';
import HandTracker from './3D/HandTracker';
import FaceModel from './3D/FaceModel';
import Time from './Pages/Time';

import HeadControls from './3D/HeadControls';
import Pointer from './Pages/Pointer';

import { Model } from './3D/Character';
import KaleidoscopePage from './Pages/KaleidoscopePage';
import TotalPage from './Pages/TotalPage';
import { Html, OrbitControls } from '@react-three/drei';
import Survey_Run from './Survey_Run';
import Facemesh from './3D/Facemesh';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three'
import FaceTextured from './3D/FaceTextured';
import WallOfFaces from './3D/WallOfFaces';

import Fade from './Components/Fade';
import PoetryNothing from './Pages/PoetryNothing';
import { Model2 } from './3D/Character2';
import { Hat } from './3D/Hat';
import Handshake from './3D/Handshake';

function App() {
  const webcamRef = useRef(null);
  const videoRef  = useRef(null);

  const [videoLoaded, setVideoLoaded] = useState(false);

  const [wireframe, setWireframe] = useState(false);
  const [smooth, setSmooth] = useState(false);
  const [textured, setTextured] = useState(false);

  const [loaded, setLoaded] = useState(false);

  const [name, setName] = useState("TestName")
  const [age, setAge] = useState(0)
  const [id, setID] = useState(1)


  const [picTaken, setPicTaken] = useState(false)

  const headPosition = useRef();
  const headRotation = useRef();

  const headTexture = useRef();
  const headUVs = useRef([]);
  const [slideStep, setSlideStep] = useState(0);
  const [videoNodeState, setVideoNodeState] = useState(null);

  const [show, setShow] = useState(false);



  function goLeft() {
    setSlideStep(slideStep + 1);
  }

  function goRight() {
    setSlideStep(slideStep - 1);
  }

  const inputResolution = {
    width: 1080,
    height: 900,
  };


  const videoConstraints = {
    width: inputResolution.width,
    height: inputResolution.height,
    facingMode: "user",
  };

  const goLeftAndPic = () => {
    goLeft()
    captureImage()
    console.log("CPATURED IMAGES")
  }

  
  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();

    fetch('/uvs/', {
      method: 'POST',
      body: JSON.stringify({id: id, uvs: headUVs.current }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    fetch('/photo/', {
      method: 'POST',
      body: JSON.stringify({id: id, image: imageSrc }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      res.text().then((data) =>  {
        setPicTaken(true)
      })
    });    

    
  }


  const handleWebcamVideo = (videoNode) => {
    const video = videoNode.target;
    if (video.readyState !== 4) return;
    if (loaded) return;
    setVideoNodeState(video)
    setLoaded(true);
  }



  const pages = [
    <HomePage setAge = {setAge} setName = {setName} goLeft = {goLeft} setID = {setID} setPicTaken = {setPicTaken}/>
    ,

    <Interstitial goLeft = {goLeft}>
      <p>This is a survey about your <i> experience </i> with the internet.  </p>
    </Interstitial>
    ,
    <Survey question = {"I often use the internet."} goLeft = {goLeft}/>
    ,
    <Survey question = {"I enjoy using the internet."} goLeft = {goLeft}/>
    ,
    <Survey question = {"I spend a lot of time online."} goLeft = {goLeft}/>
    ,
    <Survey question = {"The time I spend on the internet is well spent."} goLeft = {goLeft}/>
    ,
    <Interstitial goLeft ={goLeft}>
      <p> The average person spends 400 minutes (7 hours) online</p>
    </Interstitial>
    ,
    <>
    <Time goLeft = {goLeft}/>
    </>
    ,
    
    <Interstitial goLeft ={goLeft}>
      <p> I just wasted 5.23 seconds of your life.</p>
    </Interstitial>
            ,
    <Interstitial goLeft ={goLeft}>
      <p> That is  {((4 * 100)/(76.33 * 365.25 * 24 * 60 * 60)).toFixed(8)} of your expected life.</p>
    </Interstitial>
    ,
    <Interstitial goLeft ={goLeft}>
      <p> It is {((4 * 100)/(age * 365.25 * 24 * 60 * 60)).toFixed(8)}% of your lived life.</p>
    </Interstitial>
    ,
    <Survey question = {"I trust the internet."} goLeft = {goLeft}/>
    ,
    <Survey question = {"I go to the web for answers."} goLeft = {goLeft}/>
    ,
    <Survey question = {"I find good answers online."} goLeft = {goLeft}/>
    ,
    <Survey_Run question = {"I am rarely surprised by the web."} goLeft = {goLeft} radius = {20}/>
    ,
    <Survey_Run question = {"I am rarely surprised."} goLeft = {goLeft} radius = {50}/>
    ,
    <Survey_Run question = {"I am."} goLeft = {goLeft} radius = {200}/>
    ,
    <TotalPage videoRef = {videoRef} setVideoLoaded = {setVideoLoaded} goLeft = {goLeft}/>
    ,
    <Survey question = {"I search my own name online often."} goLeft = {goLeft}/>
    ,
    <Survey question = {"I am well represented online."} goLeft = {goLeft}/>
    ,
    <Survey question = {"I enjoy seeing myself on the internet."} goLeft = {goLeft}/>
    ,
    <Survey question = {"I prefer a clear mirror."} goLeft = {goLeft}/>
    ,
    <>
    <Survey question = {"I reflect often."} goLeft = {goLeft}/>
    <PoetryNothing/>
    </>
    ,
    <>
    <Survey question = {"I insert myself into other's stories."} goLeft = {goLeft}/>
    <Poetry camSelected ={0} goLeft = {goLeft}/>
    </>
    ,
    <Survey question = {"The web is tangible."} goLeft = {goLeft}/>
    ,
    <>
    <Poetry camSelected ={1} goLeft = {goLeft}/>
    </>
    ,
    <Interstitial goLeft ={goLeft}>
    <p> The internet is a world. </p>
    </Interstitial>
    ,
    <Interstitial goLeft ={goLeft}>
    <p> That lies tangent to our physical reality.</p>
    </Interstitial>
    ,
    <Pointer goLeft={goLeft}/>
    ,
    <Interstitial goLeft ={goLeft}>
    <p> The internet is a well of collective memory.</p>
    </Interstitial>
    ,
    <Interstitial goLeft ={goLeft}>
    <p> We are its eyes and ears</p>
    </Interstitial>
    ,
    <Survey question = {"I enjoy purely digital experiences."} goLeft = {goLeft}/>
    ,
    <Survey question = {"Purely digital experiences exist."} goLeft = {goLeft}/>
    ,
    <Survey question = {"I live in a physical world."} goLeft = {goLeft}/>
    ,
    <Survey question = {"I can see myself in digital objects."} goLeft = {goLeft}/>

    ,
    <Interstitial goLeft ={goLeftAndPic}>
    <p> 
      Stare at this dot . then click the arrow.
    </p>
    </Interstitial>
    ,
    <Survey question = {"I enjoy the feeling of being digitzed."} goLeft = {goLeft}/>
    ,
    <Survey question = {"Things from online feel very real."} goLeft = {goLeft}/>
    ,
    <Survey question = {"I am somebody."} goLeft = {goLeft}/>
    ,
    <Survey question = {"The digital world is an extension of the real world."} goLeft = {goLeft}/>
    ,
    <Interstitial goLeft ={goLeft}>
      <p>
        The average lifespan of a digital document is 5 years.
      </p>
    </Interstitial>
    ,
    <Survey question = {"I enjoy seeing myself."} goLeft = {goLeft}/>,
    <Survey question = {"I don't mind what I'm looking at."} goLeft = {goLeft}/>,
    <Survey question = {"It feels like being with an old friend"} goLeft = {goLeft}/>,
    <Survey question = {"I am going somewhere important."} goLeft = {goLeft}/>,
    <Survey question = {"I am going somewhere important"} goLeft = {goLeft}/>,
    <>
    <Survey question = {"I enjoyed this exhibit."} setSlideStep = {setSlideStep} goLeft = {goLeft}/>
    </>
    ,<>
    <Survey question = {"I am happy to be part of this wall."} setSlideStep = {setSlideStep} goLeft = {goLeft}/>
    </>

  ]

  let digitalbreak = 30;
  return (
    <div className="App">

      <Webcam
            className="webcam"
            width={inputResolution.width}
            height={inputResolution.height}    
            ref = {webcamRef}
            style={{ visibility: "hidden", position: "absolute" }}
            videoConstraints={videoConstraints}
            onLoadedData={handleWebcamVideo}
            screenshotFormat="image/png"
            >
      </Webcam>


      <ThreeCanvas>

      <ambientLight intensity={0.0} />
      <directionalLight position = {[2.5, 8, 5]} castShadow intensity={2} shadowBias = {0.05 } shadow-bias={-0.001} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={0.0} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={0.0} />
      <OrbitControls/>

      {slideStep > digitalbreak && (

      <Html position={[0, -5, 0]} transform = {true} className={'threedeesurvey'}>
          {pages.map((e, indx) => {
            return (
            <Fade show={indx == slideStep}>
              {e}
            </Fade>
            )
          })}
      </Html>
      )}



      {slideStep > digitalbreak &&  (
        <HeadControls headPosition = {headPosition} headRotation = {headRotation}  headTexture = {headTexture} />
      )}

      {slideStep > digitalbreak + 1 && slideStep < digitalbreak + 16 && (
        <Suspense>
            <group ref = {headPosition} scale={[-1, 1, 1]} >
              <FaceModel videoNodeState = {videoNodeState} textured = {slideStep > digitalbreak + 9} loaded = {loaded} headUVs = {headUVs} headTexture = {headTexture}  wireframe = {slideStep  < digitalbreak + 8} smoothvalue = {slideStep  > digitalbreak + 12 }/>
            </group>
        </Suspense>
      )} 


    {/*
    */}

        {slideStep > digitalbreak + 16 && (

        <group rotation = {[0, Math.PI, 0]} scale={1.5}> 
        <WallOfFaces inputResolution = {inputResolution}/>
        </group>

        )}
        <group scale={5} position={[0, -10, 0]}>

        {slideStep >= digitalbreak + 13 && slideStep < digitalbreak + 15 && (
          <Suspense>
              <Model2 animation = {2}> 
              <group scale={[15, 15, 15]} rotation = {[0, Math.PI, 0]} position={[0, -10, 17]}>
                <FaceTextured inputResolution = {inputResolution} id = {id}/>
              </group>
            </Model2>
          </Suspense>
          )
        }

      {slideStep > digitalbreak + 15 && slideStep < digitalbreak + 17 &&  (
        <Suspense>
          <Handshake inputResolution = {inputResolution}/>
        </Suspense>
      )}
        </group>





      </ThreeCanvas>


      {slideStep <= digitalbreak && (
        <>
          {pages.map((e, indx) => {
            return (
            <Fade show={indx == slideStep} key ={indx} t = {indx}>
              {e}
            </Fade>
            )
          })}
        </>
      )}



        {/*
                {pages[slideStep % pages.length]}

        */}

        {slideStep > 0 && (
          <>
        <div className='userBox'>
          <p>
            Survey by:
            <br/>
            Name: {name}
            <br/>
            Age: {age}
          </p>
        </div>

        {/*
        <div>
          <button
            onClick={goLeft}
            className='button left-button'
          >
            NEXT
          </button>
          <button
            onClick={goRight}
            className='button right-button'
          >
            NEXT
          </button>
        </div>
        */}

        </>

        )}

      <body>

      </body>
      
    </div>
  );
}

export default App;
