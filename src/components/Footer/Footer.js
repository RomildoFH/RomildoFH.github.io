import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import './style.css';

const gitHubIcon = require('../../images/github-icon-white-6.jpg');
const whatsappIcon = require('../../images/whatsapp white.png');
const linkedinIcon = require('../../images/LinkedIn white.png');

function Footer() {
  const { theme } = useContext(AppContext);  

  return (
    <footer className={`footer-${theme}`}>
      <p>Contact Me</p>
      <a href="https://github.com/RomildoFH" target="_blank" rel="noreferrer">
        <img src={ gitHubIcon } alt="github-icon" className="contact-icons" />
      </a>
      <a href="https://wa.me/5587999241374" target="_blank" rel="noreferrer">
        <img src={ whatsappIcon } alt="whatsapp-icon" className="contact-icons" />
      </a>
      <a href="https://www.linkedin.com/in/romildo-silva-filho/" target="_blank" rel="noreferrer">
        <img src={ linkedinIcon } alt="linkedin-icon" className="contact-icons" />
      </a>
    </footer>
  )
}

export default Footer
