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
                    <div className="mobile-content">
                       <NavLink exact to="/" className="glyph" >F</NavLink>
                       <NavLink to="/about" className="glyph" >G</NavLink>
                       <NavLink to="/work" className="glyph" >H</NavLink>
                       <NavLink to="/connect" className="glyph" >I</NavLink>
                    </div>
                  
               </div>

                <ul className="left-nav nav">
                 <li className="nav-item"><NavLink exact to="/">Home</NavLink></li>
                 <li className="nav-item"><NavLink to="/about">About</NavLink></li>
                </ul>
                   <img src={logo} className="desktop-logo" alt="logo" />
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