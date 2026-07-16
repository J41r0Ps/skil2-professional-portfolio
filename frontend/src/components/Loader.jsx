import { Html, useProgress } from '@react-three/drei';

/**
 * Suspense fallback shown inside a three.js <Canvas> while GLTF assets load.
 * Renders a spinner + load percentage as HTML overlaid on the scene.
 */
function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <span
          aria-hidden="true"
          className="h-10 w-10 animate-spin rounded-full border-2 border-secondary/30 border-t-jairo-accent"
        />
        <p className="font-mono text-sm font-medium text-jairo-accent">
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
}

export default CanvasLoader;
