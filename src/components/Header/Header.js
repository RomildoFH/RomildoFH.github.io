import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import * as Icon from "phosphor-react";
import './style.css';

function Header() {
  const { theme, setTheme, menuHidde, setMenuHidde, scrollPosition } = useContext(AppContext);
  const [position, setPosition] = useState('block');

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
    
  }

  const haddleMenu = () => {
    if (menuHidde) {
      setMenuHidde(false);
    } else {
      setMenuHidde(true);
    }
  }

  const history = useHistory();

  const determinePosition = () => {
    if (scrollPosition > 25) {
      setPosition('fixed');
    } else {
      setPosition('block');
    }
  }

  useEffect(() => {
    determinePosition()
  }, [scrollPosition]);
 
  return (
    <div>
      <header className={ `header-theme-${theme} ${position}`}>
        <div id="logo-container" onClick={ () => history.push('/') } />
        <div id="header-controls-container">
          <button id="btn-theme" type="button" className="header-controls" onClick={ changeTheme }>
            {
              theme === 'light' ? (
                <Icon.Sun color="#FFFFFF" alt="sun-icon" />
              )
              : (
                <Icon.Moon color="#FFFFFF" alt="moon-icon" />
              )
            }
          </button>
          <button id="btn-menu" type="button" className="header-controls" onClick={ haddleMenu }>
            <Icon.List color="#FFFFFF" alt="menu-icon" />
          </button>
        </div>
        {
          !menuHidde ? (
            <div
              id={ `menu-container-${ theme }` }
            >
              <button onClick={() => setMenuHidde(true)}><Link to="/">Home</Link></button>
              <button onClick={() => setMenuHidde(true)}><Link to="/aboutme">About Me</Link></button>
              <button onClick={() => setMenuHidde(true)}><a href="#contact-me">Contact</a></button>
            </div>
          ) : null
        }
      </header>
      {
        position === 'fixed' ? <div style={ {'height': '50px'} } /> : null
      }
    </div>
  )
}

export default Header;
