import React from 'react'
import './Work.scss'
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import movie from '../../images/thumbnail/movie.jpg'


function Game({ index, imgUrl, name, projectLink, codeLink, tools, title, description}) {

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
    <div className='skillPart__container'>
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}          
            >
              <div className='skillPart__heading'>
                  <h4 className='skillPart__subheading'>Game development</h4>            
              </div>  
          </motion.div>  
          
      <div  className='project__card'>
     <motion.div
        // animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
 
          <div className="app__work-item app__flex" key="movie_App">
            <div
              className="app__work-img app__flex"
            >
           
                      <img src={ movie } alt="movie" />
             

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href='https://dhanuv18.github.io/Movie-App/' target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href='https://github.com/DhanuV18/Movie-App' target="_blank" rel="noreferrer" className='language'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-tag app__flex app__tool">
                <div className="p-text tools">
                  HTML / CSS
                </div>
            </div>
            <div className="app__work-content app__flex">
              <h2 className="bold-text title">Movie app</h2>
              <p className="p-text" style={{ marginTop: 10 }}>abc</p>

      
            </div>
          </div>

          </motion.div>
          

  

</div>   

          </div>
      
  
    
  )
}

export default Game