import './App.css';
import React, { useState } from 'react'
import Content from './components/Content';
import Country from './components/Country';
import ThemeContext, { themes } from './theme-context';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {

  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () =>
    theme == themes.dark ? setTheme(themes.light) : setTheme(themes.dark);

  return (
    <ThemeContext.Provider value={themes}>
      <Router>
        <div className="App">
          <nav className="d-flex justify-content-between nbar" style={theme}>
            <p className="font-weight-bold" >Where in the world?</p>
            <div className="d-flex">

            <img className="mr-2" src="./moon.svg"  width="14px"/>
            <p onClick={toggleTheme}>Dark Mode</p>
            </div>
          </nav>
          <Switch>
            <Route path="/:name">
              <Country st={theme} />
            </Route>
            <Route path="/" exact>
              <Content st={theme} />
            </Route>
          </Switch>
        </div>

      </Router>
    </ThemeContext.Provider>

  );
}

export default App;
