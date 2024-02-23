import { Canvas } from '@react-three/fiber';
import FirstProject from './pages/FirstProject';
import * as THREE from 'three'

function App() {
  const cameraSettings = {
    fov: 45,
    near: 0.1, 
    far: 200, 
    position: [3, 2, 6]
  }
  return (
    <Canvas gl={ {
      antialias: true,
      toneMapping: THREE.ACESFilmicToneMapping
    }} camera={cameraSettings}>
      <FirstProject />
    </Canvas>
  );
}

export default App;
