import React from 'react'

import './Skills.scss';
import { motion } from 'framer-motion';

import frontend from '../../images/frontend.webp'
import backend from '../../images/backend2.webp'
import fullstack from '../../images/fullstack2.webp'
import mobileApp from '../../images/mobile.png'
import game from '../../images/game__photoshop.webp'


function SkillsPart() {
  return (
    <div className="app__profiles skill__part-container">
        <motion.div
            whileInView={{ y: [0, 50], opacity: [0, 1] }}
            transition={{ duration: 0.3 }} 
            whileHover={{ scale: 1.1 }}
            className="app__profile-item"
            key="frontend"
        >                
            <img src={ frontend } alt="Frontend development" />
            <h2 className="bold-text" style={{ marginTop: 20, marginLeft: 0,  fontSize: '1rem' }}>Frontend development</h2>
             
          </motion.div>   
          

          <motion.div
            whileInView={{ y: [0, 50], opacity: [0, 1] }}
            transition={{ duration: 0.3 }} 
            whileHover={{ scale: 1.1 }}
            className="app__profile-item"
            key="backend"
        >                
            <img src={ backend } alt="Backend development" />
            <h2 className="bold-text" style={{ marginTop: 20, marginLeft: 0,  fontSize: '1rem' }}>Backend development</h2>
             
          </motion.div>  

         <motion.div
            whileInView={{ y: [0, 50], opacity: [0, 1] }}
            transition={{ duration: 0.3 }} 
            whileHover={{ scale: 1.1 }}
            className="app__profile-item"
            key="fullstack"
        >                
            <img src={ fullstack } alt="Fullstack development" />
            <h2 className="bold-text" style={{ marginTop: 20, marginLeft: 0,  fontSize: '1rem' }}>Fullstack development</h2>
             
          </motion.div> 

         <motion.div
            whileInView={{ y: [0, 50], opacity: [0, 1] }}
            transition={{ duration: 0.3 }} 
            whileHover={{ scale: 1.1 }}
            className="app__profile-item"
            key="mobile_app"
        >                
            <img src={ mobileApp } alt="MobileApp development" />
            <h2 className="bold-text" style={{ marginTop: 20, marginLeft: 0,  fontSize: '1rem' }}>Mobile app development</h2>
             
          </motion.div> 


         <motion.div
            whileInView={{ y: [0, 50], opacity: [0, 1] }}
            transition={{ duration: 0.3 }} 
            whileHover={{ scale: 1.1 }}
            className="app__profile-item"
            key="game_dev"
        >                
            <img src={ game } alt="Game development" />
            <h2 className="bold-text" style={{ marginTop: 20, marginLeft: 0,  fontSize: '1rem' }}>Game development</h2>
             
          </motion.div>      
    </div> 
  )
}

export default SkillsPart