import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { ComputerModel } from './ComputerModel'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'

export default function ComputerContainer() {
  return (
 <Canvas>
    <Suspense fallback="loading ...">
    <Stage environment={"night"} intensity={0.5}>
<ComputerModel/>

    </Stage>
<OrbitControls enableZoom={false} autoRotate={true}/>
<PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
    </Suspense>
 </Canvas>
  )
}
