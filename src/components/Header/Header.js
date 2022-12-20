import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import * as Icon from "phosphor-react";
import './style.css';

function Header() {
  const { theme, setTheme, menuHidde, setMenuHidde } = useContext(AppContext);

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

  const goHome = () => {
    history.push('/')
  }

  return (
    <div>
      <header className={ `header-theme-${theme}` }>
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
      </header>
      {
        !menuHidde ? (
          <div id={ `menu-container-${ theme }` }>
            <button>Projects</button>
            <button>About Me</button>
            <button>Contact</button>
          </div>
        ) : null
      }
    </div>
  )
}

export default Header;
