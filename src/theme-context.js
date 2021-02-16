import React from 'react'
import { withRouter } from 'react-router-dom'

export const themes = {
    dark: {
        color: '#252525',
        background: '#fff'
    },
    light: { 
        color: '#fff',
        background: '#252525'
    }
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;