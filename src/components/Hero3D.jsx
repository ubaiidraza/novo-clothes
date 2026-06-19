import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { motion } from "framer-motion";

const Hero3D = () => {
  return (
    <section className="h-screen bg-black relative overflow-hidden">

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-7xl md:text-8xl font-black tracking-widest"
        >
          NOVO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 mt-4 text-lg"
        >
          Elevate Your Style
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Shop Now
        </motion.button>

      </div>

      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 2, 2]} />

        <Float speed={2} rotationIntensity={2}>
          <mesh>
            <torusKnotGeometry args={[1.2, 0.4, 100, 16]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Float>
      </Canvas>

    </section>
  );
};

export default Hero3D;