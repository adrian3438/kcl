'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { FC, useEffect, useState } from 'react';
import * as THREE from 'three';

interface ModelProps {
    url: string;
}

const Model1: FC<ModelProps> = ({ url }) => {
    const { scene } = useGLTF(url);

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const center = box.getCenter(new THREE.Vector3());
        scene.position.sub(center);
    }, [scene]);

    return <primitive object={scene} scale={3.0} />;
};

const Model2: FC<ModelProps> = ({ url }) => {
    const { scene } = useGLTF(url);

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const center = box.getCenter(new THREE.Vector3());
        scene.position.sub(center);
    }, [scene]);

    return <primitive object={scene} scale={0.2} />;
};

const Model3: FC<ModelProps> = ({ url }) => {
    const { scene } = useGLTF(url);

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const center = box.getCenter(new THREE.Vector3());
        scene.position.sub(center);
    }, [scene]);

    return <primitive object={scene} scale={0.1} />;
};

const Model4: FC<ModelProps> = ({ url }) => {
    const { scene } = useGLTF(url);

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const center = box.getCenter(new THREE.Vector3());
        scene.position.sub(center);
    }, [scene]);

    return <primitive object={scene} scale={0.8} />;
};

const Model5: FC<ModelProps> = ({ url }) => {
    const { scene } = useGLTF(url);

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const center = box.getCenter(new THREE.Vector3());
        scene.position.sub(center);
    }, [scene]);

    return <primitive object={scene} scale={0.2} />;
};

const Model6: FC<ModelProps> = ({ url }) => {
    const { scene } = useGLTF(url);

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const center = box.getCenter(new THREE.Vector3());
        scene.position.sub(center);
    }, [scene]);

    return <primitive object={scene} scale={0.07} />;
};

// const Model7: FC<ModelProps> = ({ url }) => {
//     const { scene } = useGLTF(url);

//     useEffect(() => {
//         const box = new THREE.Box3().setFromObject(scene);
//         const center = box.getCenter(new THREE.Vector3());
//         scene.position.sub(center);
//     }, [scene]);

//     return <primitive object={scene} scale={5.0} />;
// };


const Modeling: FC = () => {
    const [count, setCount] = useState<number>(0);

    const ModelingUrl = [
        "300LB TRUNNION BALL VALVE 24 inch",
        "LUBRICATED PLUG VALVE 600LBS RF 20INCH",  
        "LUBRICATED PLUG VALVE 600LBS RTJ 18INCH",
        "SLEEVED PLUG VALVE 150LB RF 2INCH",
        "TRUNNION BALL VALVE 300LB 10INCH",
        "DBB PLUG VALVE 150LB RF DN250A",
        // "DBB PLUG VALVE 150LB RF DN250A",
    ];

    const updateModel = (direction: number) => {
        const newCount = (count + direction + ModelingUrl.length) % ModelingUrl.length;
        setCount(newCount);
    };

    return (
        <>
            <Canvas className={`model-canvas ${count === 0 ? "active" : ""}`}>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 30, 20]} intensity={1} />
                <directionalLight position={[10, -180, -90]} intensity={1} />
                <directionalLight position={[-10, -30, 20]} intensity={1} />
                <directionalLight position={[0, 50, 50]} intensity={0.8} />
                <directionalLight position={[-30, 10, -40]} intensity={0.7} />
                <directionalLight position={[50, -50, 30]} intensity={0.6} />
                <directionalLight position={[-50, 50, -30]} intensity={0.6} />
                <OrbitControls enableZoom={true} />
                <Model1 url={`/modeling/300LB-24.glb`} />
            </Canvas>
            <Canvas className={`model-canvas ${count === 1 ? "active" : ""}`}>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 30, 20]} intensity={1} />
                <directionalLight position={[10, -180, -90]} intensity={1} />
                <directionalLight position={[-10, -30, 20]} intensity={1} />
                <directionalLight position={[0, 50, 50]} intensity={0.8} />
                <directionalLight position={[-30, 10, -40]} intensity={0.7} />
                <directionalLight position={[50, -50, 30]} intensity={0.6} />
                <directionalLight position={[-50, 50, -30]} intensity={0.6} />
                <OrbitControls enableZoom={true} />
                <Model2 url={`/modeling/lubricated-plug-valve-600lbs-rtj-18-inch.glb`} />
            </Canvas>
            <Canvas className={`model-canvas ${count === 2 ? "active" : ""}`}>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 30, 20]} intensity={1} />
                <directionalLight position={[10, -180, -90]} intensity={1} />
                <directionalLight position={[-10, -30, 20]} intensity={1} />
                <directionalLight position={[0, 50, 50]} intensity={0.8} />
                <directionalLight position={[-30, 10, -40]} intensity={0.7} />
                <directionalLight position={[50, -50, 30]} intensity={0.6} />
                <directionalLight position={[-50, 50, -30]} intensity={0.6} />
                <OrbitControls enableZoom={true} />
                <Model3 url={`/modeling/Lubricated-Plug-Valve-900LBS-RTJ-2-Inch.glb`} />
            </Canvas>
            <Canvas className={`model-canvas ${count === 3 ? "active" : ""}`}>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 30, 20]} intensity={1} />
                <directionalLight position={[10, -180, -90]} intensity={1} />
                <directionalLight position={[-10, -30, 20]} intensity={1} />
                <directionalLight position={[0, 50, 50]} intensity={0.8} />
                <directionalLight position={[-30, 10, -40]} intensity={0.7} />
                <directionalLight position={[50, -50, 30]} intensity={0.6} />
                <directionalLight position={[-50, 50, -30]} intensity={0.6} />
                <OrbitControls enableZoom={true} />
                <Model4 url={`/modeling/sleeved-plug-valve-150lb-rf-2-inch.glb`} />
            </Canvas>
            <Canvas className={`model-canvas ${count === 4 ? "active" : ""}`}>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 30, 20]} intensity={1} />
                <directionalLight position={[10, -180, -90]} intensity={1} />
                <directionalLight position={[-10, -30, 20]} intensity={1} />
                <directionalLight position={[0, 50, 50]} intensity={0.8} />
                <directionalLight position={[-30, 10, -40]} intensity={0.7} />
                <directionalLight position={[50, -50, 30]} intensity={0.6} />
                <directionalLight position={[-50, 50, -30]} intensity={0.6} />
                <OrbitControls enableZoom={true}/>
                <group rotation={[Math.PI / 2, 1.55, 0]}>
                <Model5 url={`/modeling/trunnion-ball-valve-300lb-10in.glb`} />
                </group>
            </Canvas>
            <Canvas className={`model-canvas ${count === 5 ? "active" : ""}`}>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 30, 20]} intensity={1} />
                <directionalLight position={[10, -180, -90]} intensity={1} />
                <directionalLight position={[-10, -30, 20]} intensity={1} />
                <directionalLight position={[0, 50, 50]} intensity={0.8} />
                <directionalLight position={[-30, 10, -40]} intensity={0.7} />
                <directionalLight position={[50, -50, 30]} intensity={0.6} />
                <directionalLight position={[-50, 50, -30]} intensity={0.6} />
                <OrbitControls enableZoom={true} />
                <Model6 url={`/modeling/dbb-plug-valve-150lb-rf-dn250a.glb`} />
            </Canvas>
            {/* <Canvas className={`model-canvas ${count === 6 ? "active" : ""}`}>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 30, 20]} intensity={1} />
                <directionalLight position={[10, -180, -90]} intensity={1} />
                <directionalLight position={[-10, -30, 20]} intensity={1} />
                <directionalLight position={[0, 50, 50]} intensity={0.8} />
                <directionalLight position={[-30, 10, -40]} intensity={0.7} />
                <directionalLight position={[50, -50, 30]} intensity={0.6} />
                <directionalLight position={[-50, 50, -30]} intensity={0.6} />
                <OrbitControls enableZoom={true} />
                <Model7 url={`/modeling/DBB PLUG VALVE 150LB RF DN250A.glb`} />
            </Canvas> */}
            <div className="model-control">
                <div>
                    <button onClick={() => updateModel(-1)}>&lt;</button>
                    <p>{ModelingUrl[count]}</p>
                    <button onClick={() => updateModel(1)}>&gt;</button>
                </div>
            </div>
        </>
    );
};

export default Modeling;
