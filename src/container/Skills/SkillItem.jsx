import React from 'react'


import './Skills.scss';
import { motion } from 'framer-motion';

import react from '../../images/react.png'


const scaleVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

function SkillItem() {
  return (
      
           <div className="container-small app__skills-container">
        <motion.div className="app__skills-list">
          
            <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="html">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

              <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="css">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="javascript">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="react">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="node">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="python">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="rest_api">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="sass">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="git">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="github">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>             
          
          </motion.div>
    </div>
  )
}

export default SkillItem