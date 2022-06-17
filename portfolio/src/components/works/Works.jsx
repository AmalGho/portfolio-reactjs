import React from 'react'
import './Works.css'
import Upwork from '../../images/Upwork.png';
import Fiverr from '../../images/fiverr.png';
import Amazon from '../../images/amazon.png';
import Shopify from '../../images/Shopify.png';
import Facebook from '../../images/Facebook.png';

const Works = () => {
    return (
        <div className="works">

            {/* left side */}
            <div className="awesome">
                <span>Works for All these</span>
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
                <div className="w-mainCircle">
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

                    {/* background circles */}
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>

                </div>
            </div>
        </div>
    )
}

export default Works