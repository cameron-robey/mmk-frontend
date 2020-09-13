// Import packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import DataContexts from './contexts/DataContexts';

// Import Pages
import Home from './pages/Home';

// Import Components
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/footer';
import Content404 from './components/404/Content404';

// API
import * as API from './api';

// Global CSS
import './global.css';

const App = () => {

  return (
    <DataContexts>
      <Router>
        <>
          <Route path="/" render={() => { window.scroll({top: 0, left: 0}); return null; }} />
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home}/>
            
            <Content404 />
          </Switch>
        </>
      </Router>
    </DataContexts>
    );
  }
  
  export default App;
  