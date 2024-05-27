import { useRef, useState} from "react"
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import "@tensorflow/tfjs";
// Register WebGL backend.
import "@tensorflow/tfjs-backend-webgl";
import "@mediapipe/face_mesh";
import Webcam from "react-webcam";

import * as THREE from 'three'
import { Canvas, useFrame } from "@react-three/fiber";
import { FaceControls, FaceLandmarker, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from "@react-three/fiber";
import Facemesh from "./Facemesh";

export default function MovingFace() {
    const webcamRef = useRef(null);
    const faceMatRef = useRef(null);
    const faceMatRef2 = useRef(null);
    const faceMatRef3 = useRef(null);

    const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
    const [modelLoaded, setModelLoaded] = useState(false);
    const [landmarks, setLandmarks] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [points, setPoints] = useState([]);
    const [box, setBox] = useState([])
    const faceControlsApiRef = useRef()

    const [headPosition, setHeadPosition] = useState([0, 0, 0])
    const [face, setFace] = useState(null);
    const colorMap = useLoader(TextureLoader, 'textures/checkerTexture.png')
    const webMap = useLoader(TextureLoader, 'textures/webTexture.png')

    const inputResolution = {
        width: 1080,
        height: 900,
      };
      
      const videoConstraints = {
        width: inputResolution.width,
        height: inputResolution.height,
        facingMode: "user",
      };


    const handleVideoLoad = (videoNode) => {
        const video = videoNode.target;
        if (video.readyState !== 4) return;
        if (loaded) return;
        runDetector(video);
        setLoaded(true);
    };

    const onVideoFrame = 
      (e) => {  
        if(faceMatRef.current) {
          faceMatRef.current.map = e.texture;
          faceMatRef2.current.map = e.texture;
          faceMatRef3.current.map = e.texture;
        }
      }
  
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
          if(faces_test[0]) {
            setPoints(faces_test[0].keypoints)
            setBox(faces_test[0].box)
            setFace(faces_test[0])
          }
          detect(detector);
        };
        detect(detector);
    };

    /*
    useFrame((_, delta) => {
      if(faceControlsApiRef.current) {
          const target = faceControlsApiRef.current.computeTarget()
          setHeadPosition([target.position.x, target.position.y, target.position.z])
      }
    })
    */
    
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
                    args={[0, 0, 0]}
                />
                <group position = {[0, 0,-6]}>
                <FaceLandmarker>
                  <HeadTrackingAdd 
                  onVideoFrame = {onVideoFrame}
                  faceControlsApiRef = {faceControlsApiRef}
                  setHeadPosition = {setHeadPosition}
                  />

                </FaceLandmarker>

                </group>

                <ambientLight intensity={1.5}/>
                <directionalLight intensity={0.5} rotation = {[0, Math.PI, 0]}/>



                {points.length > 0 && face && (
                  
                  <>
                  {/*
                  */}
                  <group rotation={[0, Math.PI, 0]} position={[headPosition[0], headPosition[1], -headPosition[2] +3]}>

                  <Facemesh
                   face = {face}
                  castShadow
                  receiveShadow
                  inputResolution = {inputResolution}
                  >
                    <meshStandardMaterial 
                        ref = {faceMatRef}
                        flatShading={false}
                        wireframe={false}
                        side={THREE.DoubleSide}
                        map={colorMap}
                        />
                    </Facemesh>
                  </group>


                  <group rotation={[0, Math.PI/2, 0]} position={[headPosition[0]+2, headPosition[1], -headPosition[2] + 3]}>
                    <Facemesh
                    face = {face}
                    castShadow
                    receiveShadow
                    inputResolution = {inputResolution}
                    >
                    <meshStandardMaterial 
                        ref = {faceMatRef2}
                        flatShading={false}
                        wireframe={false}
                        side={THREE.DoubleSide}
                        map={colorMap}
                        />
                    </Facemesh>
                  </group>


                  <group rotation={[0, -Math.PI/2, 0]} position={[headPosition[0]-2, headPosition[1], -headPosition[2] + 3]}>

                    <Facemesh
                    face = {face}
                    castShadow
                    receiveShadow
                    inputResolution = {inputResolution}
                    >
                    <meshStandardMaterial 
                        ref = {faceMatRef3}
                        flatShading={false}
                        wireframe={false}
                        side={THREE.DoubleSide}
                        map={colorMap}
                        />
                    </Facemesh>
                  </group>
                </>
                )} 



            </Canvas>
        </div>
    </>)
}


function HeadTrackingAdd(props) {


  useFrame((_, delta) => {
      if(props.faceControlsApiRef.current) {
          const target = props.faceControlsApiRef.current.computeTarget()
          props.setHeadPosition([target.position.x, target.position.y, target.position.z])

      }

    })
  
  return(

  <>
      <FaceControls
        ref={props.faceControlsApiRef}
        offsetScalar={2}
        makeDefault = {false}
        onVideoFrame={props.onVideoFrame}
        debug = {false}
      />

  </>
  )

}

{/*(
  
  "options": {
    "allowedHosts": ["localhost", ".localhost"],
    "proxy": "http://127.0.0.1:5000/"
    }
    

*/}