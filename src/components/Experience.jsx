import { Canvas, useFrame } from '@react-three/fiber'

import Nako from "./Nako"
import { ContactShadows, Html, OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei'
import { angleToRadians } from '../utils/angle.js'
import {  useRef, useState } from 'react'
function Experience() { 
  const [action, setAction] = useState("Standing_idle");
  
    // code to move the camera around
const orbitControlsRef = useRef(null)
  useFrame((state) => {
if (!!orbitControlsRef.current) {
  const { x, y } = state.mouse

  orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(150))
  orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30))
  orbitControlsRef.current.update()
    }
  })
  return (
    
    <>
    
      
      
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
       <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={ angleToRadians(85)} />
        <Nako action={action} castShadow />
        <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="green" metalness={0.8} roughness={0.1}/>
        </mesh>
        
      <ambientLight />
      <spotLight args={["#ffffff", 4, 15, angleToRadians(45), 0.4]} position={[-2, 2, 6]} intensity={3} castShadow/>
     <ContactShadows scale={[16, 16]} opacity={0.50}/>
      <Html
       wrapperClass='wrap-wrap'
      className='controls-wrapper'
  >
        <div className='controls'>
        <button onClick={() => {setAction("Stalking")}}>Run Forward</button>
        <button onClick={() => {setAction("Dive_roll")}}>Forward Roll</button>
        <button onClick={() => {setAction("Melee_kick")}}>Melee Kick</button>
        <button onClick={() => {setAction("Standing_idle")}}>Idle</button>
        <button onClick={() => {setAction("Death")}}>Die</button>
      </div>
      </Html>
      
      </>
  )
}

export default Experience
