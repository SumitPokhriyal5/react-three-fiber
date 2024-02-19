import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import alienGlb from ".././models/alien-1.glb";
import soldierGlb from ".././models/Soldier.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";

export default function Model() {
//   const gltf = useLoader(GLTFLoader, soldierGlb);
  const soldier = useGLTF(soldierGlb);
  const animations = useAnimations(soldier.animations, soldier.scene);

  const { animationName } = useControls({
    animationName: { options: animations.names}
  })
  useEffect(() => {
    const action = animations.actions[animationName];
    action.reset().fadeIn(0.5).play()
    return () => {
        action.fadeOut(0.5)
    }
    
  },[ animationName ])
  console.log(animations.actions)
  return (
    <primitive
     object={soldier.scene}
     scale={2}
    //  position={[0.2, 0, 2.5]}
     position-y={-2}
     />
  )
}
