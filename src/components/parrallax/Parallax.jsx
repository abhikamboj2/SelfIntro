import React, { useRef } from 'react'
import './Parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = ({type}) => {
  const ref=useRef();
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start start","end start"]
});
  const bgs=useTransform(scrollYProgress,[0,1],["0%","100%"]);
  return (
    <motion.div className='parallax'
     ref={ref}
     style={{
        background:
         type==='services'
         ? "linear-gradient(180deg,rgb(15, 38, 57) 59%, rgba(9,9,121,0.8941701680672269) 100%, rgba(17,26,122,0.9445903361344538) 100%)"
         :"linear-gradient(180deg, rgb(15, 38, 57) 33%, rgba(9,9,121,0.8941701680672269) 100%, rgba(0,212,255,1) 100%)"
    }}>
      <motion.h1 style={{y:bgs}}>{type=='services'? 'What I Do?':'What I Did?'}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" ></motion.div>
      <motion.div style={{x:bgs}} className="stars"></motion.div>
    </motion.div>
  )
}

export default Parallax
