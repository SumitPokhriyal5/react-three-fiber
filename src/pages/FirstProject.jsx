import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import CustomObject from "../components/CustomObject";

extend({ OrbitControls });
const FirstProject = () => {
  const { camera, gl } = useThree()
  const cubeRef = useRef();
  const groupRef = useRef();
  useFrame((state, delta) => {
    // console.log(delta)\
    const angle = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(angle) * 8;
    state.camera.position.z = Math.cos(angle) * 8;
    state.camera.lookAt(0, 0, 0)
    cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
  });
  return (
    <>
    {/* <orbitControls args={[camera, gl.domElement]} /> */}
    <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
    <ambientLight intensity={ 0.5 } />
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          {/* <OrbitControls /> */}
        </mesh>

        <mesh
          ref={cubeRef}
          position-x={2}
          rotation-y={Math.PI * 0.25}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
          {/* <OrbitControls /> */}
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <CustomObject />
    </>
  );
};

export default FirstProject;
