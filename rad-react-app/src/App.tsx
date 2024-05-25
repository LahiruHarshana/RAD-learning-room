import React from 'react';
import './App.css';
import { Home } from './components/home/home';
import {NavBar} from './view/navBar/NavBar';
import MainContent from './view/mainContent/MainContent';
 
function App() {
  return (
      <>
        <NavBar/>
        <MainContent/>
      </>
  );
}

export default App;
