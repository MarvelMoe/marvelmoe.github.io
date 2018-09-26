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
      <BrowserRouter>
        <div className="app-wrapper">
            <Header />
             <Route exact path="/" component={Home} />
             <Route path="/connect" component={Connect} />
             <Route path="/work" component={Work} />
             <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;