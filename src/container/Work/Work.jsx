import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

// import AppWrap from '../../wrapper/AppWrap';
// import MotionWrap from '../../wrapper/MotionWrap';

import './Work.scss';
import Frontend from './Frontend';
import Backend from './Backend';
import FullStack from './FullStack';
import Mobile from './Mobile';
import Game from './Game';





const Work = () => {
  const [works, setWorks] = useState([]);

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });


  const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
    duration: 0.7,
    ease: 'easeInOut',
    },
  },
};

  return (
    <div className='work'>
      
    <div className='work__container' id='projects'>

      <motion.div
         variants={scaleVariants}
         whileInView={scaleVariants.whileInView}          
      >
      <h2 className="head-text work__heading">My Projects</h2>
        
    </motion.div>
        <Frontend />
        <Backend />
        <FullStack />
        <Mobile />
        <Game />


     

   
      </div>
          </div>
  );
};

// export default MotionWrap(
//   MotionWrap(Work, 'app__works'),
//   'work',
//   'app__primarybg',
// );

export default Work