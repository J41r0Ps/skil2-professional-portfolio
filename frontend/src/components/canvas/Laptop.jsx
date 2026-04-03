import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

function Laptop({ isMobile }) {
  const laptop = useGLTF('./laptop/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <primitive
        object={laptop.scene}
        scale={isMobile ? 5 : 10}
        position={isMobile ? [0, -2, 0] : [0, -3.5, 0]}
        rotation={[0.1, -0.3, -0.1]}
      />
    </mesh>
  );
}

const LaptopCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full cursor-grab active:cursor-grabbing"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
        <Laptop isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default LaptopCanvas;