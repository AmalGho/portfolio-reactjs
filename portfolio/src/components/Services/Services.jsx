import React from 'react'
import './Services.css'
import HeartEmoji from '../../images/heartemoji.png'
import Glasses from '../../images/glasses.png'
import Humble from '../../images/humble.png'
import Card from '../Card/Card'
import Ruseme from './Ruseme.pdf'


const Services = () => {
    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
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
                <div style={{left: '20rem'}}>
                    <Card  
                        emoji = {HeartEmoji}
                        heading = {'Design'}
                        detail = {'figma, skitch, photoshop, adobe xd'}
                    />
                </div>
                <div style={{top: '12rem', left: '4rem'}}>
                    <Card  
                        emoji = {Glasses}
                        heading = {'Developer'}
                        detail = {'html, css, javascript, react'}
                    />
                </div>
                <div style={{top: '19rem', left: '18rem'}}>
                    <Card  
                        emoji = {Humble}
                        heading = {'UI/UX'}
                        detail = {'figma, skitch, photoshop, adobe xd'}
                    />
                </div>

                <div className="blur s-blur2"></div>
            </div>

        </div>
    )
}

export default Services