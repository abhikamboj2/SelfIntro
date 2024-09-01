import { motion } from 'framer-motion';

const variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
 hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemvariants = {
  visible: {
    y: 0,

  },
  hidden: {
    y: 100,
  
  },
};
const Links = ({ isOpen }) => {


  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className='links' variants={variants} >
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemvariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
