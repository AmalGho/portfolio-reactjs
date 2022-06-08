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

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi, I am</span>
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
                <img src={glassesimoji} alt="" />
                <div className='floatingdiv-right'>
                    <FloatingDiv image= {Crown} txt1= "Web" txt2= "Developer" />
                </div>
                <div className='floatingdiv-left'>
                    <FloatingDiv image= {thumbup} txt1= "Best Design" txt2= "Award" />
                </div>
                <div className="blur blur-pink"></div>
                <div className="blur blur-blue"></div>
            </div>
        </div>
    )
}

export default Intro