import React, { useContext } from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { myresume } from './helpers/descriptionText';
import '../styles/AboutMe.css';
import AppContext from '../context/AppContext';
import { technologiesList } from './helpers/tecnologiesList';

const perfiltPhoto = require('../images/perfil.jpeg');
const linkedinIcon = require('../images/linkedin.png');
const whatsappIcon = require('../images/whatsapp-640x640.png');
const twitterIcon = require('../images/Twitter-logo.svg.png');
const animatedGif = require('../images/2GU.gif');

function AboutMe() {
  const { theme } = useContext(AppContext);
  return (
    <div>
      <Header />
      <main className={`general-container-${ theme }`}>
        <section id="story-telling">
          <article id={`my-story-telling-${ theme }`}>
            <img src={ perfiltPhoto } alt="perfil" id="perfil-photo-details" />
            <h4 className="article-title">Hey, It's so good to see you over here. Let me tell a little about me.</h4>
            <p className="article-text">{ myresume }</p>
            <div className="social-contacts-container">
              <a
                href="https://www.linkedin.com/in/romildo-silva-filho/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ linkedinIcon } alt="linkedin-icon" className="social-icons" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5587999241374&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                >
                <img src={ whatsappIcon } alt="whasapp-icon" className="social-icons" />
              </a>
              <a
                href="https://twitter.com/Romildo83604495"
                target="_blank"
                rel="noreferrer"
                >
                <img src={ twitterIcon } alt="twitter-icon" className="social-icons" />
              </a>
            </div>
          </article>          
        </section>
        <section id="knowledge">          
          <article id={ `tecnologies-${ theme }` }>
            <img src={ animatedGif } alt="animated-gif" id="gif-photo-tecnologies" />
            <h4 className="article-title">Knowledge</h4>
            <div className="list-container">
              {
                technologiesList.map((tecnologie) => (
                  <img key={ tecnologie.name } src={ tecnologie.thumb } alt={ tecnologie.name } className="tech-icon" />
                ))
              }
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutMe;
