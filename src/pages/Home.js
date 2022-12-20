import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import Header from '../components/Header/Header';
import AppContext from '../context/AppContext';
import { firstParagraph, secondParagraph } from './helpers/descriptionText';
import projects from './helpers/projectsList';
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

  const showPortfolio = () => {
    switch (projectsHidde) {
      case false:
        setProjectsHidde(true)
        break;    
      default:
        setProjectsHidde(false)
        break;
    }
  }

  const showProject = () => {
    return projects.map((project) => (
      <div id ="trivia" class="project-card">
                    <img src="./imagens_portfolio/projetos/pixel-art.gif" alt="pixels-art" class="project-img" />
                    <div>
                        <h4 class="project-title">Pixels Art</h4>
                        <p class="project-description">Projeto desenvolvido utilizando JavaScript, HTML e CSS. Neste projeto os elementos DOM são manipulados com JS</p>
                        <a class="card-link" href="https://pixel-art-chi-jet.vercel.app/" target="_blank">Abrir Projeto</a>
                        <a class="card-link" href="https://github.com/RomildoFH/pixel-art" target="_blank">Repositorio</a>
                    </div>
                </div>
    ))
  }
  
  return (
    <>
      {
        isLoading ? <Loading />
        : (
          <div>
            <Header />
            <main>
              <section id={ `presentation-${ theme }` }>
                <div id={ `image-container-${ theme }` }>
                  <img src={ perfilImage } alt="my-perfil" id={ `perfil-${ theme }` } />
                </div>
                <div id={ `description-container-${ theme }` }>
                  <p>Hello, I’m <strong>Romildo</strong></p>
                  <p>{firstParagraph}</p>
                  { lineBreaker(secondParagraph) }
                  <button className={ `btn-${ theme }` } onClick={ redirectToAbout }>About Me</button>
                </div>
                <div className="btn-next-section" onClick={ showPortfolio }>
                  <Icon.ArrowDown size={52} className={ `arrow-down-${ theme }` }/>
                  <p>view my portfolio</p>
                </div>
              </section>
              {
                projectsHidde ? null : (
                  showProject()
                )
              }
              <section id="projects-portfolio">

              </section>
            </main>
          </div>
        )
      }
    </>
  )
}

export default Home;
