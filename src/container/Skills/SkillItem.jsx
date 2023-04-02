import React from 'react'


import './Skills.scss';
import { motion } from 'framer-motion';

import html from '../../images/html.webp'
import css from '../../images/css.webp'
import javascript from '../../images/javascript.webp'
import react from '../../images/react.webp'
import git from '../../images/git.webp'
import node from '../../images/node.webp'
import sass from '../../images/sass.webp'
import python from '../../images/python.webp'
import rest from '../../images/api.webp'
import github from '../../images/GitHub.webp'


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
                whileInView={{ y: [-60, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                
                          
              className="app__skills-item app__flex" key="html">
              
              <div className="app__flex skill__badge">
                    <img src={html} alt="html" className="" />
              </div>
              <p className="p-text">Html</p>
              </motion.div>

              <motion.div
                whileInView={{ y: [-60, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="css">
              
              <div className="app__flex skill__badge">
                    <img src={css} alt="css" className="" />
              </div>
              <p className="p-text">CSS</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [-60, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="javascript">
              
              <div className="app__flex skill__badge">
                    <img src={javascript} alt="JavaScript" className="" />
              </div>
              <p className="p-text">JavaScript</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [-60, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="react">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React js</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [-60, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="node">
              
              <div className="app__flex skill__badge">
                    <img src={node} alt="node" className="" />
              </div>
              <p className="p-text">Node js</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [-60, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="python">
              
              <div className="app__flex skill__badge">
                    <img src={python} alt="python" className="" />
              </div>
              <p className="p-text">Python</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [-60, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="rest_api">
              
              <div className="app__flex skill__badge">
                    <img src={rest} alt="rest_api" className="" />
              </div>
              <p className="p-text">REST API</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [-60, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="sass">
              
              <div className="app__flex skill__badge">
                    <img src={sass} alt="sass" className="" />
              </div>
              <p className="p-text">Sass</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [-60, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="git">
              
              <div className="app__flex skill__badge">
                    <img src={git} alt="git" className="" />
              </div>
              <p className="p-text">Git</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [-60, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="github">
              
              <div className="app__flex skill__badge">
                    <img src={github} alt="github" className="" />
              </div>
              <p className="p-text">Github</p>
              </motion.div>             
          
          </motion.div>
    </div>
  )
}

export default SkillItem