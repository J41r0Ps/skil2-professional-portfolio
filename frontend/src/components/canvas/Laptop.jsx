import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

/**
 * The GLTF laptop model with scene lighting.
 * Scaled down and re-positioned on small screens.
 *
 * @param {object}  props
 * @param {boolean} props.isMobile  True below the 640px breakpoint.
 */
function Laptop({ isMobile }) {
  const laptop = useGLTF('./laptop/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <primitive
        object={laptop.scene}
        scale={isMobile ? 4.5 : 8.5}
        position={isMobile ? [0, -2.0, 0] : [0, -3.0, 0]}
        rotation={[0.1, -0.3, -0.1]}
      />
    </mesh>
  );
}

/** Returns whether the viewport is below the given media query, kept in sync. */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = (event) => setMatches(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

/**
 * Hero canvas: auto-rotating laptop the visitor can orbit horizontally.
 * `frameloop="demand"` keeps the GPU idle between camera movements.
 * Lazy-loaded from Hero so three.js stays out of the main bundle.
 */
const LaptopCanvas = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
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
