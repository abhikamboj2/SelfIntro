import React, { useState } from 'react'
import {motion} from 'framer-motion'
const Test = () => {
    const [open,setOpen]=useState(false)
    
    const variants={
        hidden:{opacity:0},
        visible:{opacity:1},
    }
  return (
    <motion.div className='course'>
      
      <motion.div className="box" 
      variants={variants}
    //   initial={{opacity:0, scale:0}}
    //   animate={{opacity:1, scale: 1.5}}
       transition={{duration:2,delay:1}}
       animate={open? "hidden": "visible"}
       drag>
      
      </motion.div>
      <button onClick={()=>
            setOpen(prev=>!prev)
        }>click</button>
    </motion.div>
  )
}

export default Test
