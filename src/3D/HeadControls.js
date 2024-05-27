import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { FaceLandmarker, FaceControls} from "@react-three/drei"

export default function HeadControls(props) {
    const faceControlsApiRef = useRef()
    const onVideoFrame = 
      (e) => {  
        if(props.headTexture.current) {
            props.headTexture.current.map = e.texture;
          /*
          faceMatRef.current.map = e.texture;
          faceMatRef2.current.map = e.texture;
          faceMatRef3.current.map = e.texture;
          */

        }
      }


    return (
        <>
        <FaceLandmarker>
            <HeadTrackingAdd 
            
            onVideoFrame = {onVideoFrame}
            faceControlsApiRef = {faceControlsApiRef}
            headPosition = {props.headPosition}
            headRotation = {props.headRotation}
            //setHeadPosition = {props.setHeadPosition}
            />
      </FaceLandmarker>
      </>

    )
}

function HeadTrackingAdd(props) {


    useFrame((_, delta) => {
        if(props.faceControlsApiRef.current) {
            const target = props.faceControlsApiRef.current.computeTarget()
            //props.setHeadPosition([target.position.x, target.position.y, target.position.z])
            /*
            if(props.headPosition) {
              //props.headPosition.current = [target.position.x, target.position.y, target.position.z];
              props.headPosition.current.position.set([0, 0, 0]);
            }
            */
            if(props.headPosition) {
              if(props.headPosition.current) {
                
                props.headPosition.current.position.set(target.position.x, target.position.y, -target.position.z);
            }

            }
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