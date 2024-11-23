import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";

function Model({ scale, position }) {
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
      position={[0, position, 0]}
    />
  );
}

export default function ThreeDModel() {
  const [isSmallScreen, setIsSmallWindow] = useState(window.innerWidth < 1024);
  const [scale, setScale] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      const newScale =
        width > 1540 ? 8.5 : width < 435 ? 4.5 : width < 769 ? 5 : width < 1100 ? 4.2 : 5.5;
      const newPosition = width > 1540 ? -5 : width < 769 || width > 1100 ? -3.5 : -4.5;

      setScale(newScale);
      setPosition(newPosition);
      setIsSmallWindow(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas className="canvas" style={{ pointerEvents: isSmallScreen ? "none" : "all" }}>
      <OrthographicCamera makeDefault position={[5, 2, 5]} zoom={50} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, 10, -10]} intensity={1.5} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <Model scale={scale} position={position} />
    </Canvas>
  );
}
