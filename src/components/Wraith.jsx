/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/wraith.glb -o src/components/Wraith.jsx -r public 
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Wraith(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/wraith.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    actions["Armature|mixamo.com|Layer0"].reset().fadeIn(0.5).play();
    return() => actions["Armature|mixamo.com|Layer0"].fadeOut(0.5);
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name="Kachujin">
            <skinnedMesh name="Kachujin_1" geometry={nodes.Kachujin_1.geometry} material={materials.kachujin_MAT} skeleton={nodes.Kachujin_1.skeleton} />
            <skinnedMesh name="Kachujin_2" geometry={nodes.Kachujin_2.geometry} material={materials.kachujin_MAT_} skeleton={nodes.Kachujin_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/wraith.glb')
