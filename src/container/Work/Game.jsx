import React from 'react'
import './Work.scss'
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import game from '../../images/thumbnail/game.webp'


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
                  <h6 className='skillPart__subheading'>Game Development</h6>            
              </div>  
          </motion.div>  
          
      <div  className='project__card'>
     <motion.div
        // animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
 
          <div className="app__work-item app__flex" key="RockScissorPaper">
            <div
              className="app__work-img app__flex"
            >
           
                      <img src={ game } alt="game" />
             

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href='https://dhanuv18.github.io/Rock-Paper-Scissor-game/' target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href='https://github.com/DhanuV18/Rock-Paper-Scissor-game' target="_blank" rel="noreferrer" className='language'>
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
                  HTML / CSS / JavaScript
                </div>
            </div>
            <div className="game">
              <h2 className="bold-text title game-title">Rock Paper Scissor Game</h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                This is a simple and fun game which you can play against the computer.
                If you click Scissors and the computer chooses the paper you win the game.
                Scissors can cut paper. If you choose scissors and the computer chooses rock,
                the computer wins the game. Rock can break scissors.
                If you choose Paper and the computer chooses rock, you win the game.
                Paper can wrap the rock.</p>      
            </div>

             <div className='mobile__button'>

              <div className='btn__demo'>
                <a href='https://dhanuv18.github.io/Rock-Paper-Scissor-game/' target="_blank" rel="noreferrer">Demo</a>
              </div>

              <div className='btn__repo'>
                <a href='https://github.com/DhanuV18/Rock-Paper-Scissor-game' target="_blank" rel="noreferrer">Repo</a>
              </div>

            </div>
          </div>

          </motion.div>
          

  

</div>   

          </div>
      
  
    
  )
}

export default Game