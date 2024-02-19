import { OrbitControls } from "@react-three/drei";

const FirstProject = () => {
  return (
    <>
    <mesh position-x={-2} >
      <sphereGeometry />
      <meshBasicMaterial color="orange" />
      {/* <OrbitControls /> */}
    </mesh>
    <mesh position-x={2} rotation-y={Math.PI * 0.25} scale={1.5} >
      <boxGeometry />
      <meshBasicMaterial color="mediumpurple" />
      <OrbitControls />
    </mesh>
    <mesh position-y={-1} rotation-x={ -Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
    </mesh>
    </>
  );
};

export default FirstProject;
