import React from 'react';

import Header from './components/layout/header/Header'
import './App.css';
import Footer from './components/layout/footer/footer'
import {Route} from 'react-router-dom'
import Router from './routes'


function App() {
  return ( 
    <div className = "App" >
    <Route component={Header}/>
     <Route component={Router}/>
      <Route component={Footer}/>
     
    
    </div>

  );
}

export default App;