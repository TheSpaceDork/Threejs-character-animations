import  { Suspense, useState } from 'react'
import './App.css'
import {LoadingScreen} from './components/LoadingScreen'
import Experience from './components/Experience'
import { Canvas } from '@react-three/fiber';
function App() { 
 const [start, setStart] = useState(false);
  return (
    
    <>
    
     <Canvas>
      <Suspense fallback={null}>
      { start &&   <Experience />}
      </Suspense>
      </Canvas>
      <LoadingScreen started={start} onStarted={()=> {setStart(true)} } />
      
      </>
  )
}

export default App
