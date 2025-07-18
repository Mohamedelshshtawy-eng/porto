import { animate } from 'motion'
import { useInView } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

export const Counter = ({from ,to,text}) => {
 const [count,setCounter] = useState(from)
 const ref = useRef()
 const isView = useInView(ref)
 useEffect(()=>{
   const animation = animate(from,to,{
    duration:4,
    ease:"easeOut",
    onUpdate:(prev=>(
      setCounter(Math.floor(prev))
    ))
   })
   return ()=>animation.cancel()
 },[isView,from,to])
  return (
    <div className='counter' ref={ref}>
        <h1>{count}+</h1>
        <p>{text}</p>
    </div>
  )
}
