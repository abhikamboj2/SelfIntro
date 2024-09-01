import React, { useRef } from 'react'
import {animate, color, motion, useInView} from 'framer-motion'
import './services.scss'

const Services = () => {
    const ref=useRef();
    const isInView=useInView(ref,{margin:"-100px"});
    const variants={
        initial:{
            x:-500,
            y:100,
            opacity:0,
        },
        animate:{
            x:0,
            y:0,
            opacity:1,
            transition:{
                duration:1,
                staggerchildren:0.1,
            }

        },
    }
    return (
        <motion.div className='services'variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
        <motion.div className="txt-ctr" variants={variants}>
        <motion.p whileHover={{color:"white"}}> <motion.b  whileHover={{color:"white"}}>
          Welcome </motion.b> to the whimsical realm
           
                <br/>
                 of my<b> digital abode!</b> </motion.p>
            <hr/>
        </motion.div>
            <motion.div className="title-ctr" variants={variants}> 
              <div className="title">
                <img src="/people.webp" alt="" />
                <div className="single">

                <motion.h1 whileHover={{color:"orange"}}>
                    <b >Technical</b> Knowledge      
                </motion.h1>
                <button>What I do???</button>
                </div>
              </div>
            </motion.div>
           
           
           
            <motion.div className="list-ctr" variants={variants}>
                <motion.div className="box" >
                    <motion.h2 whileHover={{scale:1.5, color:"orange"}}>CPP</motion.h2>
                    <p>
                        <h5>Basics</h5>
                        <h5>Data Structure</h5>
                        <h5>Algorithms</h5>
                       <h5>OOPS</h5>
                        <h5>Code Building</h5>
                        <h5>Code Analysis</h5>
                    </p>
                    <button >Go</button>
                </motion.div>
                <div className="box">
                    <motion.h2 whileHover={{scale:1.5, color:"orange"}}>Web-Dev</motion.h2>
                    <p>
                        <h5>HTML</h5>
                        <h5>CSS</h5>
                        <h5>JavaScript</h5>
                        <h5>ReactJs</h5>
                        <h5>ExpressJs</h5>
                        <h5>NodeJs</h5>

                    </p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <motion.h2 whileHover={{scale:1.5, color:"orange"}}>AI</motion.h2>
                    <p>
                        <h5>Python</h5>
                        <h5>Basic Understranding</h5>
                        <h5>Basic Algoritms</h5>
                    </p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <motion.h2 whileHover={{scale:1.5, color:"orange"}}>Block-Chain</motion.h2>
                    <p>
                       <h5>Basic Understanding</h5>
                       <h5>Solidity</h5>
                       <h5>Smart Contract</h5>
                       <h5>RedHat </h5>
                       <h5>Remix</h5>
                    </p>
                    <button>Go</button>
                </div>
                
      
        </motion.div>
    </motion.div>
  )
}

export default Services
