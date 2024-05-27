import FaceTextured from "./FaceTextured"
import { Hat } from "./Hat"
import { Model2 } from "./Character2"

export default function Nikita(props) {

    return (
        <>
        <group  scale={[1, 1, 1]} rotation = {[0, 0, 0]}>
        <Model2 animation = {1}> 
        <group scale={18} position={[0, 0, 5]}>
            <Hat/>
        </group>
        <group scale={[15, 15, 15]} rotation = {[0, Math.PI, 0]} position={[0, -8, 16]}>
        <FaceTextured inputResolution = {props.inputResolution} id = {1}/>
        </group>
        </Model2>
        </group>

    </>

    )

}