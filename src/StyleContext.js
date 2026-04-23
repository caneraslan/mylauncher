import { createContext,useEffect, useState, useContext } from 'react';

export const StyleContext = createContext();

export const StyleProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = {
    backgroundColor: (isDarkMode ? '#050404' : '#ffffff'),
    color: (isDarkMode ? '#ffffffff' : '#000000ff'),
    navbgcolor: (isDarkMode ? 'rgba(0, 0, 0, 0.87)' : '#ffffff'),
    navcolor: (isDarkMode ? 'rgb(224, 224, 224)' : '#000000'),  
    hovercolor: (isDarkMode ? 'rgb(165, 15, 15)' : 'rgb(165, 15, 15)'), 
    shadowcolor: (isDarkMode ? 'rgba(31, 29, 29, 0.62)':'rgba(230, 225, 225, 0.47)' ),  
    picturebgcolor: (isDarkMode ? 'rgb(117, 7, 7)':'rgb(117, 7, 7)' ),  
    bordercolor: (isDarkMode ? 'rgba(204, 204, 204, 1)': 'rgba(138, 138, 138, 1)' ), 
  };

  useEffect(()=>{   
    const root = document.documentElement;
    root.style.setProperty('--bg-color', theme.backgroundColor);
    root.style.setProperty('--text-color', theme.color);
    root.style.setProperty('--nav-bg-color', theme.navbgcolor);
    root.style.setProperty('--nav-text-color', theme.navcolor);
    root.style.setProperty('--shadow-bg-color', theme.shadowcolor);
    root.style.setProperty('--picture-bg-color', theme.picturebgcolor);
    root.style.setProperty('--border-color', theme.bordercolor);
  },[isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
    
  return (
    <StyleContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div> 
        {children}
      </div>
    </StyleContext.Provider>
  );
};


export const useTheme = () => useContext(StyleContext);