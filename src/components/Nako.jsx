/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 nako.glb
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ action }) {
  function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current;
}
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/nako/nako.glb')
  const { actions } = useAnimations(animations, group)
  const previousAction = usePrevious(action)
  useEffect(() => {
    if (previousAction) {
      actions[previousAction].fadeOut(0.2)
        actions[previousAction].stop()
    }
    actions[action].play()
     actions[action].fadeIn(0.2)
  }, [action, actions, previousAction])
  return (
    <group ref={group}  dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Ch46" geometry={nodes.Ch46.geometry} material={materials.Ch46_body} skeleton={nodes.Ch46.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/nako/nako.glb')

