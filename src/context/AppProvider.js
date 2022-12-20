import React, { useMemo, useState } from 'react'
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [menuHidde, setMenuHidde] = useState(true);
  const [projectsHidde, setProjectsHidde] = useState(false);
  const [theme, setTheme] = useState('light');

  const values = useMemo(() => ({
    isLoading,
    setIsLoading,
    menuHidde,
    setMenuHidde,
    projectsHidde,
    setProjectsHidde,
    theme,
    setTheme,
  }), [isLoading, menuHidde, projectsHidde, theme])

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
