// Import packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import DataContexts from './contexts/DataContexts';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Organisations from './pages/Organisations';
import News from './pages/News';
import Videos from './pages/Videos';
import Blog from './pages/Blog';

// Import Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Content404 from './components/404/Content404';
import PageTitle from './components/Helpers/PageTitle';

// API
import * as API from './api';

// Global CSS
import './global.css';

const App = () => {

  return (
    <DataContexts>
      <Router>
        <>
          <PageTitle title={''} />
          <Route path="/" render={() => { window.scroll({top: 0, left: 0}); return null; }} />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/courses" component={Courses}/>
            <Route exact path="/organisations" component={Organisations}/>
            <Route exact path="/news" component={News}/>
            <Route exact path="/videos" component={Videos}/>
            <Route exact path="/blog" component={Blog}/>
            <Content404 />
          </Switch>
        </>
        <Footer />
      </Router>
    </DataContexts>
  );
}
  
export default App;