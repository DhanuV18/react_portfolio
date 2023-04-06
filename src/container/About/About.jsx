import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import Zoom from 'react-reveal/Zoom';
import { useState } from "react";

import resume from '../../resume/Visvanathan_Dhanushan_resume.pdf'

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

const About = () => {
  const [aboutMe, setAboutMe] = useState([]);


  return (
    <div className="about" id="about">
      <div className="container ">
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
        >
          <h1 className="about__heading">About</h1>
          
        </motion.div>

        
          <motion.div
            whileInView={{ y: [-150, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
          >
            <div className="about__details">
              <div >
              <h2 className="name__heading">Who is Dhanushan?</h2>
                  <Zoom top>
                  <p className="paragraph__one">
                   Hi! My name is Dhanushan. I'm passionate about bringing both the technical and
                    visual aspects of digital products to life. As a developer I love to create new products...
                    I'm a Frontend Software engineer who builds websites and web applications that lead to the
                    success of the overall product.
                  </p>                
                  </Zoom>

                  {/* <motion.div
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
              > */}
                <Zoom top>
                  <p className="paragraph__two">
                    I have a Bachelor's degree in Software Engineering from London Metropolitan university.
                    I feel very happy when I'm creating, learning, exploring and thinking about how to make things better.
                  </p>

                </Zoom>

           {/* </motion.div>  */}
                <div className="CV__details">
                  <h3 src="#contact" className="contact__link">
                    <a href="#contact" className="getInTouch">
                      Get in touch! <span className="heart">❤️</span>
                    </a>
                  </h3>
                <a href={ resume } className="btn__resume" download>
                    <button type="button" className="btn btn__download" >
                      Download CV
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
         
      </div>
    </div>
  );
};

export default About;
