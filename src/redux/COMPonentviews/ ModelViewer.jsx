import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Model = ({ path }) => {
  const gltf = useGLTF(path);
  const ref = useRef(null);

  let time = 0;

  useFrame(() => {
    if (ref.current) {
      time += 0.0005;
      ref.current.rotation.y += 0.003;
    }
  });

  return <primitive ref={ref} object={gltf.scene} scale={[3, 3, 3]} position={[0.73, 0.7, 0]} />;
};

const ModelViewer = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
         // Fixé sur la droite
          alignItems: "center",
              }}
            >
              <Canvas 
          camera={{
            position: [8, 16, 7], // Ajuste la position de la caméra pour zoomer un peu
          fov: 2.4, // Champ de vision ajusté pour une meilleure vue
        }}
        style={{
          width: "100vw",
          height: "100vh",
          position: "",
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