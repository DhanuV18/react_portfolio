import React from 'react'
import { motion } from 'framer-motion'
import profile from '../../images/profile.png'
// import circle from '../../images/circle.svg'
import react from '../../images/react.png'
import javascript from '../../images/javascript.png'
import css from '../../images/css.png'
import { useTypewriter } from 'react-simple-typewriter'

import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
    duration: 1,
    ease: 'easeInOut',
    },
  },
};


function Header() {
  const [text, count] = useTypewriter({
    words: [
      "a Developer",
      "a Creator",
      "an Adventurer",
      "a Cartoon Fan"
    ],
    loop: true,
    delaySpeed : 1000,
  });

  const { isType, isDelete, isDelay, isDone } = count;
  return (
    <div
      id='home'
      className='app__header app__flex'>
    
      <motion.div
        whileInView={{ y: [10, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info">
        
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span></span>
            <div className='name' style={{ marginLeft: 10 }}>
              <p className='p-text-name' style={{ fontSize: 20 , marginTop: 10}}>Hi, I am</p>
              <h1 className='head-text' style={{marginTop: 0}}>Dhanu</h1>
            </div>
          </div>
          <div className='tag-cmp app__text typed-text'>
              <p className='p-text'><strong>I'm {text}</strong></p>
          </div>
        </div>
 
      </motion.div>
 
      <motion.div
        //  whileInView={{ y: [15, 0], opacity: [0, 1] }}
        // transition={{ duration: 0.5 }}
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-img"
      >
        <picture>
            <source type="../../images/profile.webp" srcSet="../../images/profile.webp 1x, ../../images/profile@2x.webp 2x" />
            <source type="../../images/profile.png" srcSet="../../images/profile.png 1x, ../../images/profile@2x.png 2x" />
            <img src={profile} alt="profile picture" className='profile__picture'/>         
        </picture>

        <motion.div
        whileInView={{ y: [0, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}>
        <div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
        </div> 
      
      </motion.div>
         
      </motion.div>
        
      
      

      

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
    >
          {
            [css,react, javascript].map((circle, index) => (
             
              <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img src={circle} alt="profile_bg" />
              </div>
            ))
          }
 

        </motion.div>

    </div>

  )
}

export default Header