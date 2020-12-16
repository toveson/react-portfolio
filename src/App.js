import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css';
import Home from './components';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/' component={Home}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      
      <Route path='/github' component={() => {
        window.location.href = 'https://github.com/toveson';
        return null;
      }}/>
      <Route path='/linkedin' component={() => {
        window.location.href = 'https://www.linkedin.com/in/trever-oveson/';
        return null;
      }}/>
    </>

  );
}

export default App;
