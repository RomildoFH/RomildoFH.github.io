import React, { useEffect, useMemo, useState } from 'react'
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [menuHidde, setMenuHidde] = useState(true);
  const [projectsHidde, setProjectsHidde] = useState(true);
  const [theme, setTheme] = useState('light');
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const values = useMemo(() => ({
    isLoading,
    setIsLoading,
    menuHidde,
    setMenuHidde,
    projectsHidde,
    setProjectsHidde,
    theme,
    setTheme,
    scrollPosition,
  }), [isLoading, menuHidde, projectsHidde, theme, scrollPosition])

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
