import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const Hero3D = () => {
  return (
    <section className="h-screen bg-black relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-white text-7xl font-bold">
          NOVO
        </h1>

        <p className="text-gray-300 mt-4">
          Premium Fashion Collection
        </p>
      </div>

      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={2} />

        <Float speed={2}>
          <mesh>
            <torusKnotGeometry args={[1, 0.3, 100, 16]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Float>
      </Canvas>
    </section>
  );
};

export default Hero3D;