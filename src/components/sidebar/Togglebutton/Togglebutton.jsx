// import {motion} from 'framer-motion'
// const Togglebutton = ( {open, setOpen} ) => {
  
//   return <button onClick={()=> setOpen(!open)}>
    
//     {/* <svg height="23" width="23" viewBox="0 0 23 23">
//     <motion.path strokeWidth="3" stroke="black"  strokeLinecap="round" variants={{hidden:{d:"M 2 2.5 L 20 2.5"},visible:{d:"M 3 16.5 L 17 2.5"}}}/>
//     <motion.path stroke="black" stroke-width="3" strokeLinecap="round"/>
//     <motion.path stroke="black" stroke-width="3" strokeLinecap="round"/> */}
 

//   </button>

  
// }

// export default Togglebutton;
import React from 'react';
import SidebarOpenIcon from './SidebarOpenIcon';
import SidebarCloseIcon from './SidebarClosedIcon';

const Togglebutton = ({ open, setOpen }) => {
  return (
    <button onClick={()=> setOpen(!open)}>
      {open ? <SidebarCloseIcon /> : <SidebarOpenIcon />}
    </button>
  );
};

export default Togglebutton;
// import React from 'react';

// const Togglebutton = ({ open, setOpen }) => {
//   const handleToggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <button type="button" onClick={handleToggle}>
//       Toggle Sidebar
//     </button>
//   );
// };

// export default Togglebutton;

// Togglebutton.jsx
// import React from 'react';

// const Togglebutton = ({ open, toggleSidebar }) => {
//   const handleToggle = () => {
//     toggleSidebar();
//   };

//   return (
//     <button onClick={handleToggle}>
//       {open ? 'Close Sidebar' : 'Open Sidebar'}
//     </button>
//   );
// };

// export default Togglebutton;

