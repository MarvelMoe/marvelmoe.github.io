import React from 'react';
import {NavLink} from "react-router-dom"
import logo from './images/logo.png';

class Header extends React.Component {

 render() {

    return (

           <div className="header-wrapper">
             <header className="parent-nav">
               <div className="mobile-wrapper">
                  <div className="mobile-logo">
                        <img src={logo} className="mobile-logo" alt="logo" />
                  </div>
                  <div class="mobile-btn-wrap">
                    <button class="mobile-btn">Menu</button>
                    <div class="mobile-content">
                       <NavLink exact to="/">Home</NavLink>
                       <NavLink to="/about">About</NavLink>
                       <NavLink to="/work">Work</NavLink>
                       <NavLink to="/connect">Connect</NavLink>
                    </div>
                  </div>
               </div>

                <ul className="left-nav nav">
                 <li className="nav-item"><NavLink exact to="/">Home</NavLink></li>
                 <li className="nav-item"><NavLink to="/about">About</NavLink></li>
                </ul>
                   <img src={logo} className="desktop-logo desktop-logo" alt="logo" />
                <ul className="right-nav nav">
                 <li className="nav-item"><NavLink to="/work">Work</NavLink></li>
                 <li className="nav-item"><NavLink to="/connect">Connect</NavLink></li>
                </ul>    
             </header>   
           </div>
    )

 }
  	  
}
 

export default Header;