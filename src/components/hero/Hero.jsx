import React, { Children } from 'react'
import './hero.scss'
import {motion} from 'framer-motion'

const Hero = () => {
  // document.getElementById('call').addEventListener('click', function() {
  //  
  // });

  const textVariants={
     initial:{
      x:-500,
      opacity:0, 
    },
     animate:{
      x:0,
      opacity:1, 
      transition:{
        duration:1,
        staggerChildren:0.1,
      }
    },
  };
  const slideVariants={
     initial:{
      x:0,
      
    },
     animate:{
      x:"-220%",
      transition:{
        repeat:Infinity,
        repeatType:"mirror",
        duration:40,
      },
    },
  };
  
  return (
    <div className='hero'>
      <div className="wrapper">

          <motion.div className="text" variants={textVariants} initial='initial' animate='animate'>
            <motion.h2 variants={textVariants}>Abhi Kamboj</motion.h2>
            

            <motion.h1 variants={textVariants}>Web Developer Portfolio</motion.h1>

            <motion.div variants={textVariants} className="button">
            
              <motion.a  variants={textVariants} href='tel:+917707864000'>
                Contact Me
              </motion.a>
              
            </motion.div>
          </motion.div>
      </div>
        <motion.div className="slidectr" variants={slideVariants} initial='initial' animate='animate'>
          CPP React JavaScript NodeJS ExpressJs Block-chain 
        </motion.div>
        <div className="img-ctr">
            <img src="/hero2.png" alt="" />
        </div>
      
    </div>
  )
}

export default Hero
