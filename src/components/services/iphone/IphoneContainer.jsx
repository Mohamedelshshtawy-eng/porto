import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import  { Suspense } from 'react'
import { IphoneModel } from './IphoneModel'

export default function IphoneContainer(){
  return (
    <Canvas>
        <Suspense>
            <Stage environment={"night"} intensity={0.5}>
                <IphoneModel/>
            </Stage>
        <OrbitControls  enableZoom={false} autoRotate={true}/>
        <PerspectiveCamera position={[0,1,1.8]} zoom={0.8} makeDefault/>
        </Suspense>
    </Canvas>
  )
}
