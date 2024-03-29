import React from 'react'
import './Works.css'
import Upwork from '../../images/Upwork.png';
import Fiverr from '../../images/fiverr.png';
import Amazon from '../../images/amazon.png';
import Shopify from '../../images/Shopify.png';
import Facebook from '../../images/Facebook.png';
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Works = () => {


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="works">

            {/* left side */}
            <div className="awesome">
                <span
                    style={{
                        color: darkMode ? 'white' : ''
                    }}
                >Works for All these</span>
                <span>Brands & Clients</span>
                <span>bla bla blamcfghiodjk dkfhjguegfl dvbsnsm bla bla blamcfghiodjk
                    <br />
                    dkfhjguegfl dvbsnsm bla bla blamcfghiodjk dkfhjguegfl dvbsnsm.
                    <br />
                    dkfhjguegfl dvbsnsm bla bla blamcfghiodjk dvbsnsm.
                    <br />
                    dkfhjguegfl dvbsnsm bla bla blamcfghiodjk.
                </span>

                <button className="button s-button">Hire Me</button>
                <div className="blur s-blur1"></div>
            </div>


            {/* right side */}
            <div className="w-right">
                <motion.div className="w-mainCircle"
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3, type: "spring" }}
                >
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>

                    {/* background circles */}
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works