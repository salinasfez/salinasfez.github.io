import React from 'react';
import Main from './components/Main.js';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Contact from './components/Contact.js';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import './App.css';
import { Nav } from 'react-bootstrap';



function App() {
  return (
    <BrowserRouter>
        <Nav className='navbar' variant='pills' defaultActiveKey='/'>
          <NavLink className='nav-link' to='/'>Home</NavLink>
          <NavLink className='nav-link'  to='/projects'>Projects</NavLink>
          <NavLink className='nav-link'  to='/aboutme'>About Me</NavLink>
          {/* <NavLink className='nav-link'  to='/contact'>Contact</NavLink> */}
        </Nav>
        <Route exact path='/' component={Main}/>
        {/* <Route exact path='/contact' component={Contact}/> */}
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/aboutme' component={AboutMe}/>
    </BrowserRouter>
  );
}

export default App;


