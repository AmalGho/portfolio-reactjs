import React from 'react'
import './intro.css'
import Github from '../../images/github.png';
import LinkedIn from '../../images/linkedin.png';
import Inastagram from '../../images/instagram.png';
import Vector1 from '../../images/Vector1.png';
import Vector2 from '../../images/Vector2.png';
import boy from '../../images/boy.png';
import thumbup from '../../images/thumbup.png';
import Crown from '../../images/crown.png';
import glassesimoji from '../../images/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Intro = () => {

    const transition = {duration: 2, type: 'spring'};

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span
                        style={{
                            color : darkMode ? 'white' : ''
                        }}
                    >Hi, I am</span>
                    <span>Amal</span>
                    <span>programming is my passion, and i love sharing my knowledge with others. 
                    i am here to help you in Html, CSS, and JavaScript.
                    </span>
                </div>
                <button className="button i-button">hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Inastagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{left: '-36%'}}
                    whileInView={{left: '-24%'}}
                    transition={transition}
                    src={glassesimoji} alt=""
                />


                <motion.div 
                    initial={{left: '74%', top: '-4%'}}
                    whileInView={{left: '68%'}}
                    transition={transition}
                    className='floatingdiv-right'
                >
                    <FloatingDiv image= {Crown} txt1= "Web" txt2= "Developer" />
                </motion.div>

                <motion.div 
                    initial={{left: '9rem', top: '18rem'}}
                    whileInView={{left: '1rem'}}
                    transition={transition}
                    className='floatingdiv-left'
                >
                    <FloatingDiv image= {thumbup} txt1= "Best Design" txt2= "Award" />
                </motion.div>
                <div className="blur blur-pink"></div>
                <div className="blur blur-blue"></div>
            </div>
        </div>
    )
}

export default Intro