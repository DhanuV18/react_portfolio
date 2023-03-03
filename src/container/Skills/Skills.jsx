import React,{ useState, useEffect } from 'react'

import './Skills.scss';
import SkillItem from './SkillItem';
import { motion } from 'framer-motion';

// import { urlFor } from '../../client';
// import { client } from '../../client';

import react from '../../images/react.png'
import SkillsPart from './SkillsPart';


// import about01 from '../../images/about01.png'
// import about02 from '../../images/about02.png'
// import about03 from '../../images/about03.png'
// import about04 from '../../images/about04.png'

// const abouts = [
//   { title: 'Frontend Development', imgUrl: `${about01}` },
//   { title: 'Backend Development', imgUrl: `${about02}` },
//   { title: 'FullStack Development', imgUrl: `${about03}` }, 
//   { title: 'Mobile App Development', imgUrl: `${about04}` }  
// ];


const Skills = ({name , icon }) => {
    const [abouts, setAbouts] = useState([]);
    const [skills, setSkills] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';
  //   const skillsQuery = '*[_type == "skills"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });

  //   client.fetch(skillsQuery).then((data) => {
  //     setSkills(data);
  //   });
  // }, []); 

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
    


    
    
  return (
    <div className='skills__container' id="skills">
      <motion.div
        variants={scaleVariants}
          whileInView={scaleVariants.whileInView}   
          className="app__header-img">
          <h1 className="skills__head-text">Skills</h1>

      </motion.div>

      <motion.div
                whileInView={{ y: [-20, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} >
                <h1 className='skills__heading'>My Toolbox & Things I can Do</h1>
      </motion.div>
      
      
      <SkillItem />   
      <SkillsPart />
      


      </div>
    
  )
}
 
export default Skills
