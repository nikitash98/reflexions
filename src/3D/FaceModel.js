import { useEffect, useRef, useState} from "react"
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import "@tensorflow/tfjs";
// Register WebGL backend.
import "@tensorflow/tfjs-backend-webgl";
import "@mediapipe/face_mesh";

import * as THREE from 'three'
import { Canvas, useFrame } from "@react-three/fiber";
import { FaceControls, FaceLandmarker, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from "@react-three/fiber";
import Facemesh from "./Facemesh";

export default function FaceModel(props) {
    const faceMatRef = useRef(null);

    const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
    const [modelLoaded, setModelLoaded] = useState(false);
    const [landmarks, setLandmarks] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [points, setPoints] = useState([]);
    const [box, setBox] = useState([])

    const [headPosition, setHeadPosition] = useState([0, 0, 0])
    const [face, setFace] = useState(null);
    const colorMap = useLoader(TextureLoader, 'textures/checkerTexture.png')
    const webMap = useLoader(TextureLoader, 'textures/webTexture.png')
      


    {/*
    const handleVideoLoad = (videoNode) => {
        const video = videoNode.target;
        if (video.readyState !== 4) return;
        if (loaded) return;
        runDetector(video);
        setLoaded(true);
    };

      */}

    const inputResolution = {
      width: 1080,
      height: 900,
    };


    useEffect(()=> {
      runDetector(props.videoNodeState)
    }, [props.videoNodeState])


  
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
          if(video) {
            const estimationConfig = { flipHorizontal: true };
            const faces_test = await net.estimateFaces(video, estimationConfig);
            if(faces_test[0]) {
              setPoints(faces_test[0].keypoints)
              setBox(faces_test[0].box)
              setFace(faces_test[0])
            }
            detect(detector);
        }

        };
        detect(detector);
    };
    
    console.log(props.headTexture)
    return (<>

    

    
        {points.length > 0 && face && (
          <>
          <group rotation={[0, Math.PI, 0]} position={[0, 0, 0]} scale={[15, 15, 15]}>
            <Facemesh
              face = {face}
              castShadow
              receiveShadow
              inputResolution = {inputResolution}
              headUVs = {props.headUVs}
              >
            {props.textured && props.smoothvalue && (
              <meshStandardMaterial 
              ref = {props.headTexture}
              flatShading={false}
              wireframe={props.wireframe}
              side={THREE.DoubleSide}
              map = {colorMap}
              />
          
            )}

            {props.textured && !props.smoothvalue && (
            <meshStandardMaterial 
                ref = {props.headTexture}
                flatShading={true}
                wireframe={props.wireframe}
                side={THREE.DoubleSide}
                map = {colorMap}
                />
            )} 


            {!props.textured && (
              <meshStandardMaterial
              flatShading={!props.smooth}
              wireframe={props.wireframe}
              side={THREE.DoubleSide}

              />
            )}
            
            </Facemesh>
          </group>

        </>
        )} 


    </>)
}
