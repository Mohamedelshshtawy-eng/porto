
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function BookModel(props) {
  const { nodes, materials } = useGLTF('/book.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Architexture_0.geometry} material={materials.Architexture} />
        <mesh geometry={nodes.Architexture_1.geometry} material={materials.Bookpage} />
      </group>
    </group>
  )
}

useGLTF.preload('/book.glb')
