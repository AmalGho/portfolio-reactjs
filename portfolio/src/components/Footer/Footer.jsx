import React from 'react'
import './Footer.css'
import Wave from '../../images/wave.png'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{width: '100%'}}/>
            <div className="f-content">
                <span>amol43@outlook.com</span>
                <div className="f-icons">
                    <Insta color= 'white' size= '3rem' />
                    <Twitter color= 'white' size= '3rem' />
                    <Github color= 'white' size= '3rem' />
                </div>
            </div>
        </div>
    )
}

export default Footer