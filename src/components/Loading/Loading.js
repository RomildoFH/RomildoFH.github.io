import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import "./style.css"

function Loading() {
  const { theme, setTheme } = useContext(AppContext);

  const verifyTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    let currentTheme = savedTheme !== null ? savedTheme : 'light';
    if (currentTheme !== 'light') {
      setTheme(currentTheme);
    }
  }

  useEffect(() => {
    verifyTheme();
  }, [])

  return (
    <div id={ `loading-container-${theme}` }>
      <img
        src={ require('../../images/loading.gif') }
        alt="loading"
        id="loading-image"
      />
      {/* https://www.behance.net/gallery/31234507/Open-source-Loading-GIF-Icons-Vol-1 */}
      <p
        id="loading-text"
        >
          Welcome
          <br></br>
          Please wait a moment while we prepare all for you
        </p>
    </div>
  )
}

export default Loading