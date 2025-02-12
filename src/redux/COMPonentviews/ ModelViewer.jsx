import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Model = ({ path }) => {
  const gltf = useGLTF(path);
  const ref = useRef(null);

  let time = 0;

  useFrame(() => {
    if (ref.current) {
      time += 0.005;
      ref.current.rotation.y += 0.001; 
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={ref} object={gltf.scene} scale={[3, 3, 3]} />;
};

const ModelViewer = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "flex-end", // Fixé sur la droite
        alignItems: "center",
        paddingRight: "200px", // Espace fixe à droite
      }}
    >
      <Canvas
        camera={{
          position: [10, 10, 10], // Ajuste la position de la caméra
          fov: 4, // Champ de vision ajusté pour une meilleure vue
        }}
        style={{
          width: "100%",
          height: "100vh",
        }}
      >

        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} />

        <Model path="../perfume_bottle.glb" />
      
      </Canvas>

    </div>
  );
};

export default ModelViewer;
