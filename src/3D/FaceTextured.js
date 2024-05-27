import { useTexture } from '@react-three/drei';
import Facemesh from './Facemesh';
import * as THREE from 'three'

import { useState, useEffect } from 'react';
export default function FaceTextured(props) {

    const [faceUVs, setFaceUVs] = useState(null) 

    //const colorMap = useTexture('images/' + props.id + '.png')
    const colorMap = useTexture('images/' + props.id  +'.png')

    colorMap.colorSpace = THREE.SRGBColorSpace;
    const fetchData = async () => {
        const response = await fetch('/uvs/' + props.id + ''
        );
        const data = await response.json();
        setFaceUVs(data.uvs);
      };

    useEffect(() => {
        fetchData();
      }, []);
    
    return (
        <>
        {faceUVs && (

        <Facemesh 
        castShadow
        receiveShadow
        inputResolution = {props.inputResolution}
        faceUVs={faceUVs}
        
        >
            <meshStandardMaterial
            attach={"material"}
            map = {colorMap}
            flatShading={true}
          
            side={THREE.DoubleSide}
            emissiveMap={colorMap} 
            emissive={"white"}
            emissiveIntensity={0.1}
            >
            </meshStandardMaterial>
          </Facemesh>

        )}
        
        </>
    )
}