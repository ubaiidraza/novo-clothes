import { useGLTF } from "@react-three/drei";

const ShirtModel = (props) => {
  const { scene } = useGLTF("/models/shirt.glb");

  return (
    <primitive
      object={scene}
      scale={2}
      position={[0, -1.2, 0]}
      {...props}
    />
  );
};

useGLTF.preload("/models/shirt.glb");

export default ShirtModel;