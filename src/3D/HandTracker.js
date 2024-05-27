import { useEffect, useRef, useState, useCallback} from "react"
import Webcam from "react-webcam";

import * as cam from "@mediapipe/camera_utils";
import { Hands, Results } from "@mediapipe/hands";
import { Canvas, useFrame } from "@react-three/fiber";
import { FaceControls, FaceLandmarker, OrbitControls, PerspectiveCamera, useAspect } from "@react-three/drei";



export default function HandTracker() {
    const [loaded, setLoaded] = useState(false);
    const webcamRef = useRef(null);
    const resultsRef = useRef([]);
    const [resultsState, setResultsState] = useState([])
    const boxRefs = useRef([])
    let camera = null; // variable to initialize the camera

    let boxes = [];
    for(let i = 0; i < 43; i++) {
      boxes.push(i);
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



      const onResults = useCallback((results) => {
        if(results) {
          console.log(results)
          let ar = results.multiHandWorldLandmarks;


          if(ar && ar.length > 0) {
            for(let j = 0; j < ar.length; j++) {
              for(let i = 0; i < ar[j].length; i++) {
                let b = ar[j][i]
                  if(boxRefs.current[j * 21 + i] && boxRefs.current[j * 21 + i].position) {
                    boxRefs.current[j * 21 + i].position.set(b.x * 10, b.z * 10, b.y * 10 + 10);

                  }
              }
            }

          }
        }
    
      }, []);
    

    useEffect(() => {
      const hands = new Hands({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        },
      });
  

      hands.setOptions({
        maxNumHands: 2,
        modelComplexity: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });
  
      hands.onResults(onResults);
  

      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null
        ) {
            camera = new cam.Camera(webcamRef.current.video, {
            onFrame: async () => {
            await hands.send({ image: webcamRef.current.video });
        },
        width: inputResolution.width,
        height: inputResolution.height,
        });
            camera.start();
        }

    })

    const handleVideoLoad = (videoNode) => {
        const video = videoNode.target;
        if (video.readyState !== 4) return;
        if (loaded) return;
        //runDetector(video);
        //setLoaded(true);
    };

    const onVideoFrame = 
      (e) => {  
      }
  
    return (<>

        
        <div className="ThreeCanvas"> 
            <Webcam
            className="webcam"
            width={inputResolution.width}
            height={inputResolution.height}    
            ref = {webcamRef}
            style={{ visibility: "hidden", position: "absolute" }}
            videoConstraints={videoConstraints}
            onLoadedData={handleVideoLoad}
            >
            </Webcam>

            <Canvas shadows>

                <OrbitControls
                makeDefault = {true}
                />
                <color
                    attach="background"
                    args={[0, 1, 0]}
                />

                {
                boxes.map((marker, i) => {
                  if(i < 21) {
                  return(
                    <group  ref = {(ref)=>(boxRefs.current[i]=ref)}>

                    <mesh>
                      <sphereGeometry args={[0.1, 16]} />
                      <meshStandardMaterial color={'orange'} />
                    </mesh>
                  </group>
  
                  )
                }

                })

                }

       <mesh  receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial/>
      </mesh>

          

             <ambientLight intensity={Math.PI / 2} />


            </Canvas>

        </div>
    </>)
}



    {/*
    const runDetector = async (video) => {
        const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
        const detectorConfig = {
          runtime: "tfjs",
        };
        const detector = await faceLandmarksDetection.createDetector(
          model,
          detectorConfig
        );
        const detect = async (net) => {
          const estimationConfig = { flipHorizontal: true };
          const faces_test = await net.estimateFaces(video, estimationConfig);
          detect(detector);
        };
        detect(detector);
    };
    */}


    /*
    useFrame((_, delta) => {
      if(faceControlsApiRef.current) {
          const target = faceControlsApiRef.current.computeTarget()
          setHeadPosition([target.position.x, target.position.y, target.position.z])
      }
    })
    */
    