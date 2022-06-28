import React from 'react'
import './Services.css'
import HeartEmoji from '../../images/heartemoji.png'
import Glasses from '../../images/glasses.png'
import Humble from '../../images/humble.png'
import Card from '../Card/Card'
import Ruseme from './Ruseme.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Services = () => {

    const transition = {duration: 1, type: 'spring'};

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="services" id='services'>
            {/* left side */}
            <div className="awesome">
                <span
                    style={{
                        color : darkMode ? 'white' : ''
                    }}
                >My Awesome</span>
                <span>services</span>
                <span>bla bla blamcfghiodjk dkfhjguegfl dvbsnsm bla bla blamcfghiodjk
                    <br />
                    dkfhjguegfl dvbsnsm bla bla blamcfghiodjk dkfhjguegfl dvbsnsm</span>

                    <a href={Ruseme} download>
                        <button className="button s-button">Download CV</button>
                    </a>
                <div className="blur s-blur1"></div>
            </div>
            {/* right side */}
            <div className="cards">
                <motion.div style={{left: '14rem'}}
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "21rem" }}
                    transition={transition}
                >
                    <Card  
                        emoji = {HeartEmoji}
                        heading = {'Design'}
                        detail = {'figma, skitch, photoshop, adobe xd'}
                    />
                </motion.div>

                <motion.div style={{top: '12rem', left: '-4rem'}}
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "4rem" }}
                    transition={transition}
                >
                    <Card  
                        emoji = {Glasses}
                        heading = {'Developer'}
                        detail = {'html, css, javascript, react'}
                    />
                </motion.div>

                <motion.div style={{top: '19rem', left: '12rem'}}
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "18rem" }}
                    transition={transition}
                >
                    <Card  
                        emoji = {Humble}
                        heading = {'UI/UX'}
                        detail = {'figma, skitch, photoshop, adobe xd'}
                    />
                </motion.div>

                <div className="blur s-blur2"></div>
            </div>

        </div>
    )
}

export default Services