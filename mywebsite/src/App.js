import React from 'react';
import Main from './components/Main.js';
import { Route, NavLink } from 'react-router-dom';
import './components/Contact.js';


function App() {
  return (
    <div className="App">
      <Route path='/' component={Main}/>
    </div>
  );
}

export default App;
