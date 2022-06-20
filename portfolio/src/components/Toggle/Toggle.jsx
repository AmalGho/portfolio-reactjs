import React from 'react'
import './Toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../context'
import { useContext } from 'react'

const Toggle = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="toggle">
            <Moon />
            <Sun />
            <button className="t-button"
                style = {darkMode ? {left: '2px'} : {right : '2px'}}
            >
            </button>
        </div>
    )
}

export default Toggle