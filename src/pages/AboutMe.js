import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { myresume } from './helpers/descriptionText';
import '../styles/AboutMe.css';

const perfiltPhoto = require('../images/perfil.jpeg');

function AboutMe() {
  return (
    <div>
      <Header />
      <main>
        <section id="story-telling">
          <img src={ perfiltPhoto } alt="perfil" id="perfil-photo-details" />
          <article id="my-story-telling">
            <h4 id="article-title">Hey, It's so good to see you over here. Let me tell a little about me.</h4>
            <p id="article-text">{ myresume }</p>
          </article>
        </section>
        <section id="knowledge">
          <img src="" alt="" />
          <article id="tecnologies"></article>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutMe;
