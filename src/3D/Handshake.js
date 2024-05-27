import Nikita from "./Nikita"
import { Model2 } from "./Character2"
import FaceTextured from "./FaceTextured"
export default function Handshake(props) {


    return (
        <>
        <group rotation = {[0, Math.PI/2, 0]} position={[-1, 0, 0]} >

         <Model2 animation = {1}>
            <group scale={[15, 15, 15]} rotation = {[0, Math.PI, 0]} position={[0, -8, 16]}>
            <FaceTextured inputResolution = {props.inputResolution} id = {1}/>
            </group>

        </Model2>
        </group>

        <group rotation = {[0, -Math.PI/2, 0]} position={[1, 0, 0]}> 

        <Nikita inputResolution = {props.inputResolution}/>
        </group>

        </>
        
    )
}