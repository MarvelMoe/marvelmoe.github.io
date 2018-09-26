import React, { Component } from 'react';
import myworks from "./data/myworks";
import  './css/works.css';

const Work = (props) => (
		 
		<div className="container work-wrapper"> 
			<h2> My Work </h2>
			<p className="work-intro">Here are a few of the websites and apps that I've worked on. Go ahead and click on them</p>
			<div className="work-block">

			{myworks.map( (index)  => {
				return (
					<div className="single-work">
					<a href={index.link}>	 
						<img src={require(`${index.img}`)}  className="image" />
							<figcaption>							 
								<h2>{index.title}</h2> 
								<p>{index.description}</p>	
								 			 
							</figcaption>	
							</a>			 
					</div>
				)

			})}

			</div>
		</div>	 
		 
)

export default Work;