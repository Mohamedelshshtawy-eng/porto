import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { BookModel } from './BookModel'

const BookContainer = () => {
  return (
    <Canvas>
        <Suspense>
            <Stage environment={"night"} intensity={0.5}>
                <BookModel/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <PerspectiveCamera position={[0,1,-1]} zoom={0.8} makeDefault/>
        </Suspense>
    </Canvas>
  )
}

export default BookContainer