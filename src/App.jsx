import { Canvas } from '@react-three/fiber';
import FirstProject from './pages/FirstProject';

function App() {
  const cameraSettings = {
    fov: 45,
    near: 0.1, 
    far: 200, 
    position: [3, 2, 6]
  }
  return (
    <Canvas camera={cameraSettings}>
      <FirstProject />
    </Canvas>
  );
}

export default App;
