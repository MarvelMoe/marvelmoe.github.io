import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Reveal from 'react-reveal/Reveal';

import mac from "./images/macbook.jpg";
import moe from "./images/moe-dog.jpg";
import sean from "./images/moe-sean.jpg";
import disney from "./images/disney.jpg";
import hiking from "./images/hiking.jpg"
import sprite from "./images/sprite.png"
import  './css/about.css';
 
 

 

const styles = {
    imageContainer: {
        backgroundImage: `url(${sprite})`
    }
};


class About extends React.Component {


	 render(){
	 		return(
	 				<div className="about-wrapper">
	 				    <h2>About Me </h2>

	 				    <div className="the-bio container">
	 				        <img src={mac} className="about-img"  alt="macbook"/>
	 				        <div className="about-content">

	 				            <p> I’m Moe, a Full Stack Developer, that means I can do it from the front or back. 

	 				                <img src={moe} className="moe-nike" alt="moe with nike hat" />

	 				                I enjoy making sites cool and fast. I've been in the IT game for 10 years and coding since my days at Facebook 
	 				                (yes...I once gave Mark Zuckerberg a high-five).
	 				                I can be counted on to do any of the following:</p>

	 				            <ul>
	 				                <li> Integrating WordPress<span style={styles.imageContainer} className="sprite wp"></span></li>
	 				                <li> Moving Databases <span style={styles.imageContainer} className="sprite db"></span></li>
	 				                <li> Updating Servers <span style={styles.imageContainer} className="sprite dns"></span></li>
	 				                <li> Using SCSS <span style={styles.imageContainer} className="sprite sass"></span> </li>
	 				                <li> Adding JavaScript <span style={styles.imageContainer} className="sprite js"></span></li>
	 				                <li> Making React Apps <span style={styles.imageContainer} className="sprite react"></span></li>
	 				            </ul>
	 				            <br/>

	 				            <p> I'm also good with taking mockups from Adobe Illustrator or Photoshop and converting them to code, 
	 				            analyzing Google Analytics Data or setting up Google Tag Manager and a few other things.</p>

	 				        </div>
	 				    </div>

						<Reveal effect="rotateIn">
		 				    <div className="spare-time container">
		 				        <p>In my spare time, I'm hiking around Niagara Falls, taking the kids to Disneyland, or chauffeuring around the backups for the Golden State Warriors. </p>
		 				        <div className="images" onScroll={this.handleScroll} id='rotate' ref="rotate">
		 				            <img src={hiking} alt="moe hiking with kids" />
		 				            <img src={disney} alt="moe at disneyland with kids" />
		 				            <img src={sean} alt="moe with sean the man livingston" />
		 				        </div>
		 				    </div>
	 				    </Reveal>

	 				</div>
	 			)

	 }
	 
		 
}


export default About;