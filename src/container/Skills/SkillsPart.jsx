import React from 'react'

import './Skills.scss';
import { motion } from 'framer-motion';

import frontend from '../../images/frontend.webp'
import backend from '../../images/backend2.webp'
import fullstack from '../../images/fullstack2.webp'
import mobileApp from '../../images/mobile.png'
import game from '../../images/game__photoshop.webp'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};


function SkillsPart() {
  return (
    <div className="app__profiles skill__part-container">
        <motion.div
            
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
        
            className="app__profile-item"
            key="frontend"
        >               
            <div className='app__profile-item-image'>
              <img src={frontend} alt="Frontend development" />
              <h2 className="bold-text" style={{ marginTop: 15, marginLeft: 0,  fontSize: '1.2rem' }}>Frontend development</h2>
            </div>
             
          </motion.div>   
          

          {/* <motion.div
             variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__profile-item"
            key="backend"
      >     
        <div className='app__profile-item-image'>
            <img src={ backend } alt="Backend development" />
            <h2 className="bold-text" style={{ marginTop: 15, marginLeft: 0,  fontSize: '1.2rem' }}>Backend development</h2>
        </div>  
          </motion.div>   */}

         {/* <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__profile-item"
            key="fullstack"
      >    
        <div className='app__profile-item-image'>
            <img src={ fullstack } alt="Fullstack development" />
            <h2 className="bold-text" style={{ marginTop: 15, marginLeft: 0,  fontSize: '1.2rem' }}>Fullstack development</h2>
        </div>  
          </motion.div>  */}

         {/* <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__profile-item"
            key="mobile_app"
      >    
         <div className='app__profile-item-image'>
            <img src={ mobileApp } alt="MobileApp development" />
            <h2 className="bold-text" style={{ marginTop: 15, marginLeft: 0,  fontSize: '1.2rem' }}>Mobile app development</h2>
         </div>    
          </motion.div>  */}


         <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__profile-item"
            key="game_dev"
      >      
          <div className='app__profile-item-image'>
            <img src={ game } alt="Game development" />
            <h2 className="bold-text" style={{ marginTop: 15, marginLeft: 0,  fontSize: '1.2rem' }}>Game development</h2>
          </div>   
          </motion.div>      
    </div> 
  )
}

export default SkillsPart