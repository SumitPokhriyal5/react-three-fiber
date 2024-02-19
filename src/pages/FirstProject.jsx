import { OrbitControls } from "@react-three/drei";

const FirstProject = () => {
  return (
    <mesh>
      <torusKnotGeometry />
      <meshNormalMaterial />
      <OrbitControls />
    </mesh>
  );
};

export default FirstProject;
