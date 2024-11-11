import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";

function Model({ scale }) {
  const model = useLoader(GLTFLoader, "pancake.glb");
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <primitive
      ref={meshRef}
      object={model.scene}
      scale={scale}
      rotation={[0, 0, 0]}
      position={[0, -3.5, 0]}
    />
  );
}

export default function ThreeDModel() {
  const [scale, setScale] = useState(window.innerWidth > 1024 ? 5.5 : 4.5);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth > 500 ? 5.5 : 4.5);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas className="canvas">
      <OrthographicCamera makeDefault position={[0, 2, 5]} zoom={50} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, 10, -10]} intensity={1.5} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <Model scale={scale} />
    </Canvas>
  );
}
