import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './css/main.css';
import Home from './Home';
import Connect from './Connect';
import Header from './Header'; 
import Work from './Work';
import About from './About';


 
class App extends Component {


  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app-wrapper">
            <Header />
             <Route  path={process.env.PUBLIC_URL + '/'} component={Home} />
             <Route  path={process.env.PUBLIC_URL + '/connect'} component={Connect} />
             <Route path={process.env.PUBLIC_URL + '/work'}  component={Work} />
             <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
