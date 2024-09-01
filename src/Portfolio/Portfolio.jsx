import React, { useRef } from 'react'
import {motion,useScroll, useSpring} from 'framer-motion'
import './Portfolio.scss'
const item=[
   {

       id:1,
       titile:"react",
       img:"https://www.pexels.com/photo/facade-of-an-apartment-building-19804796/",
       discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dignissimos eligendi suscipit voluptas inventore iusto iste, sunt itaque fuga minima vero ipsam voluptatum nesciunt nulla impedit non corporis ea quisquam!",
    },
   {

       id:2,
       titile:"react 2",
       img:"https://images.pexels.com/photos/1331750/pexels-photo-1331750.jpeg?auto=compress&cs=tinysrgb&w=600",
       discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dignissimos eligendi suscipit voluptas inventore iusto iste, sunt itaque fuga minima vero ipsam voluptatum nesciunt nulla impedit non corporis ea quisquam!",
    },
   {

       id:3,
       titile:"react 3",
       img:"https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
       discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dignissimos eligendi suscipit voluptas inventore iusto iste, sunt itaque fuga minima vero ipsam voluptatum nesciunt nulla impedit non corporis ea quisquam!",
    },
   {

       id:4,
       titile:"react 4",
       img:"https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=600",
       discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dignissimos eligendi suscipit voluptas inventore iusto iste, sunt itaque fuga minima vero ipsam voluptatum nesciunt nulla impedit non corporis ea quisquam!",
    },
]

const Single=({item})=>{
  const ref=useRef();
  return(

    <section ref={ref}> 
    <div className="container">
      <img src="item.img" alt="" className="src" />
      <div className="textContent">
        <h2>{item.titile}</h2>
        <p>{item.discription}</p>
      </div>
    </div>
    
  </section>
     )

}
const Portfolio = () => {
  const ref= useRef();
  const {scrollYProgress}= useScroll({target:ref, offset:["end end","start start"]});
  const scaleX =useSpring(scrollYProgress,{
    stiffness: 100,
    damping:30,
  });


  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div className="progressBar" style={{scaleX}}>

        </motion.div>
      </div>
      {item.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
      
    </div>
  )
}

export default Portfolio
