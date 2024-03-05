import { Suspense } from 'react';
import Model from '.././components/Model';
import { OrbitControls } from '@react-three/drei'

const SoldierAnimation = () => {
  return (
    < >
      <Suspense fallback={null}>
      {/* <ambientLight /> */}
        <pointLight position={[10, 10, 10]} />
        <Model />
        <OrbitControls />
      </Suspense>
    </>
  )
}

export default SoldierAnimation