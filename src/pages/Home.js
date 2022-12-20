import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import Header from '../components/Header/Header';
import AppContext from '../context/AppContext';
import { firstParagraph, secondParagraph } from './helpers/descriptionText';
import * as Icon from "phosphor-react";
import '../styles/Home.css';

const perfilImage = require('../images/perfil.jpeg');

function Home() {
  const {
    isLoading,
    setIsLoading,
    menuHidde,
    setMenuHidde,
    projectsHidde,
    setProjectsHidde,
    theme,
   } = useContext(AppContext);

   const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, []);

  const lineBreaker = (text) => {
    const newArray = text.split('//n');
    console.log(newArray)
    return newArray.map((line, index) => (
      <p key={ `line-${index}` }>{line}</p>
    ));
  }

  const redirectToAbout = () => {
    history.push('/aboutme');
  }
  
  return (
    <>
      {
        isLoading ? <Loading />
        : (
          <div>
            <Header />
            <main>
              <section id="presentation">
                <div id={ `image-container-${ theme }` }>
                  <img src={ perfilImage } alt="my-perfil" id={ `perfil-${ theme }` } />
                </div>
                <div id={ `description-container-${ theme }` }>
                  <p>Hello, I’m <strong>Romildo</strong></p>
                  <p>{firstParagraph}</p>
                  { lineBreaker(secondParagraph) }
                  <button className={ `btn ${ theme }` } onClick={ redirectToAbout }>About Me</button>
                </div>
                <div className="btn-next-section">
                  <Icon.ArrowDown size={52} className={ `arrow-down-${ theme }` }/>
                  <p>view my portfolio</p>
                </div>
              </section>
            </main>
          </div>
        )
      }
    </>
  )
}

export default Home