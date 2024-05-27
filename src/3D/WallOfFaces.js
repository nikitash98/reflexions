import { useEffect, useState } from "react"
import FaceTextured from "./FaceTextured";
import { Html } from "@react-three/drei";

export default function WallOfFaces(props) {
    const [usersRun, setUsersRun] = useState();

    useEffect(() => {

        fetch('/usersRun', {
            method: "GET",
            headers: {
              'Content-Type': 'application/json'
            }
         }).then((response) => {
            const data = response.json().then((abc) => {
                setUsersRun(abc)
            });
        })

    }, [])

    console.log(usersRun)
    return (
        <>
        {usersRun && (
            <>
                {usersRun.map((e, indx) => {
                    return(
                        <>
                    <group position={[(indx%3)*2.0, Math.floor(indx/3) * 2.0, 0]} >
                        <Html position={[0, -0.8, 0]}>
                            <h1>{e}</h1>
                        </Html>

                        <FaceTextured inputResolution = {props.inputResolution} id ={e}/>
                        {/*
                        <mesh castShadow receiveShadow>
                            <boxGeometry />
                            <meshStandardMaterial/>
                        </mesh>
                        */}
                    </group>
                    </>

                    )

                })}
            </>
        )}
        </>

    )
}