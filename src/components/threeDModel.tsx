import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const model = useLoader(GLTFLoader, "pancake.glb");
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <primitive
      ref={meshRef}
      object={model.scene}
      scale={5}
      rotation={[0, 180, 0]}
      position={[0, -3.5, 0]}
    />
  );
}

export default function ThreeDModel() {
  return (
    <Canvas className="canvas">
      {/* Add the OrthographicCamera */}
      <OrthographicCamera
        makeDefault
        position={[0, 1, 5]} // Adjust as needed
        zoom={50} // Controls the "size" or scale of the model
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, 10, -10]} intensity={1.5} />
      <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      <Model />
    </Canvas>
  );
}
