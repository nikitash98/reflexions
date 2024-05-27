import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stats, OrbitControls, Html } from '@react-three/drei'
import { Model } from './Character'
export default function ThreeCanvas(props) {
    return (

        <>
            <Canvas className='ThreeCanvas' style={{"width": "100%", "height": "100vh", "position": "absolute"}} shadows>
                <OrbitControls />


                {props.children}
            </Canvas>
        </>

    )
}