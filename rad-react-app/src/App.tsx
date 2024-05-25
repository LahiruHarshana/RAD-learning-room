import React from 'react';
import './App.css';
import { Home } from './components/home/home';
import {NavBar} from './view/navBar/NavBar';
 
function App() {
  return (
      <>
        <NavBar/>
        <Home />
      </>
  );
}

export default App;
