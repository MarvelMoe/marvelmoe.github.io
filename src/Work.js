import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import myworks from "./data/myworks";
import  './css/works.css';
 

 
const Work = (props) => (
		 
		<div className="container work-wrapper"> 
			<h2> My Work </h2>
			<p className="work-intro">Here are a few websites and apps that I've worked on. All of them are linked.</p>
			<div className="work-block">

			{myworks.map( (index, i)  => {
				return (
					<Reveal effect="rotateIn"  key={i}>
						<div className="single-work">
						<a href={index.link} target="_blank">	 
							<img src={(`${index.img}`)}  className="image" />
								<figcaption>							 
									<h2>{index.title}</h2> 
									<p>{index.description}</p>					 			 
								</figcaption>	
								</a>			 
						</div>
					</Reveal>
				)

			})}


			</div>

 
		</div>	 
		 
)

export default Work;