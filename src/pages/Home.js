import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import Header from '../components/Header/Header';
import AppContext from '../context/AppContext';
import { firstParagraph, secondParagraph } from './helpers/descriptionText';
import projects from './helpers/projectsList';
import * as Icon from "phosphor-react";
import '../styles/Home.css';
import Footer from '../components/Footer/Footer';
import ProjectDetail from '../components/ProjectDetail/ProjectDetail';

const perfilImage = require('../images/perfil.jpeg');

function Home() {
  const {
    isLoading,
    setIsLoading,
    setMenuHidde,
    projectsHidde,
    setProjectsHidde,
    theme,
   } = useContext(AppContext);

   const [selectedProject, setSelectedProject] = useState({});
   const [showDetail, setShowDetail] = useState(false);

   const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, []);

  const lineBreaker = (text) => {
    const newArray = text.split('//n');
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
        setTimeout(() => {
          window.scrollTo({
            top: '300',
            behavior: 'smooth',
          });          
        }, 0); 
        break;
    }    
  }

  const showDetails = (project) => {
    setSelectedProject(project);
    setShowDetail(true);
  };

  const showProject = () => {
    return projects.map((project, index) => (
      <div id ="trivia" className={ `project-card-${ theme }` } key={ `project-${index}` } onClick={() => showDetails(project)}>
        <img src={ project.thumb } alt="pixels-art" className="project-img" />
        <div>
          <h4 className="project-title">{ project.name }</h4>
          </div>
      </div>
    ))
  }

  const generalClick = () => {
    setMenuHidde(true);
  };
  
  return (
    <>
      {
        isLoading ? <Loading />
        : (
          <div>
            <Header />
            <main>
              <section id={ `presentation-${ theme }` } onClick={ generalClick }>
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
                  <Icon.ArrowDown
                    size={52}
                    className={ `arrow-down-${ theme }` }
                  />
                  <p>
                    {
                      projectsHidde ? ('view my portfolio') : ('hidde my portfolio')
                    }
                  </p>
                </div>
              </section>
              {
                projectsHidde ? null : (
                  <section id={`projects-portfolio-${ theme }`}>
                    { showProject() }
                  </section>
                )
              }
            </main>
            {
              showDetail && <ProjectDetail project={ selectedProject } setShowDetail={ setShowDetail } showDetail={ showDetail } />
            }
            <Footer />
          </div>
        )
      }
    </>
  )
}

export default Home;
