import React, { Suspense } from 'react';
import * as THREE from 'three'
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

function Model() {
    const { scene } = useGLTF('/dog.glb')
    return <primitive object={scene} />;
}

const cameraPosition = new THREE.Vector3(
    20 * Math.sin(0.2 * Math.PI),
    20,
    20 * Math.cos(0.2 * Math.PI)
)

export function DogModel(props) {
    return (
        <div style={{ height: "300px", backgroundColor: "rgb(32,32,35)" }}>
            <Canvas camera={{ position: cameraPosition, zoom: 5 }}>
                <OrbitControls />
                <ambientLight intensity={1} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    );
}