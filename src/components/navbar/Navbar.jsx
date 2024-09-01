import { motion } from 'framer-motion';
import './Navbar.scss';
import Sidebar from '../sidebar/sidebar';

export default function Navbar() {
  return (
    <div className="navbar1">
       <div className="wapper">
        <Sidebar/>
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:5}}>Abhi</motion.span>
        <div className="social">
            <a href="#">
                <img src="/instagram.png" alt="hi" />
            </a>
            <a href="#">
                <img src="/facebook.png" alt="" />
            </a>
            <a href="#">
                <img src="/youtube.png" alt="" />
            </a>
            <a href="#">
                <img src="/logo192.png" alt="" />
            </a>
        </div>
      </div>
    </div>
  )
}
