// libraries
import React from 'react';
import {Helmet} from 'react-helmet';

// components
import Image from './../../utils/components/Image';
import { ramsisImage, seifImage, ieeeIssatImage, ieeeTnImage, ieeeImage } from './../../settings';


function About() {

	return (
		<div className="about">
			<Helmet>
				<title>About - Covid-19 ai predictions</title>
    			<meta name="description" content="This is a project dedicated to the current situations and to make people aware of how severe it might get.
 We've used machine learning skills to predict the confirmed cases/deaths in infected countries with Covid-19.
The data and predictions will be updated daily according to the newly confirmed cases and deaths.<br/>
 Stay safe everyone we will get through this together." />
			</Helmet>
			<h1 className="title">About us</h1>
			<p className="paragraph">
			This is a project dedicated to the current situations and to make people aware of how severe it might get.
 We've used machine learning skills to predict the confirmed cases/deaths in infected countries with Covid-19.
The data and predictions will be updated daily according to the newly confirmed cases and deaths.<br/>
 Stay safe everyone we will get through this together.
			</p>
			
			<p className="paragraph">
			It was developed by the following IEEE student members from the Higher Institute of Applied Science and Technology of Sousse (ISSAT Sousse) Student Branch. It is one of the most active IEEE student branches in IEEE Tunisia section. IEEE is the world’s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities.
			</p>
			<div className="logos">
				<a  target="_blank" rel="noopener noreferrer"  href="https://ieee.tn/" className="image">
					<Image src={ieeeTnImage} />
				</a>

				<a  target="_blank" rel="noopener noreferrer"  href="https://www.ieee.org/" className="image">
					<Image src={ieeeImage} />
				</a>
				
				<a  target="_blank" rel="noopener noreferrer"  href="https://fr-fr.facebook.com/IEEE.SB.ISSATSO/" className="image">
					<Image src={ieeeIssatImage} />
				</a>
			</div>
			<div className="developers">

				<div className="dev-card">
					<div className="top-bar">
						<div className="image">
							<Image src={seifImage} />
						</div>
						<div className="name">
							<h3>Seif Gharres</h3>
							<small>Web developer / designer</small>
						</div>
					</div>
					<div className="details">
						<div className="sub-title" ><small>Who am i ?</small><span></span></div>
						<p className="paragraph">
						I'm a highly motivated web developer / designer who focuses on writing clean, elegant and efficient code. 
						</p>
						<div className="sub-title" ><small>Skills</small><span></span></div>

						<div className="skills">
							<small className="counted" >Python ( Django )</small>
							<small className="counted" >JavaScript ( ReactJs )</small>
							<small className="counted" >Sass, Css, Html</small>
						</div>
						<div className="sub-title" ><small>contact</small><span></span></div>
						
						<div className="contact">
							<small className="counted"> For Business inquiries</small>
							<span className="mail" >seifgharrese.developer@gmail.com</span>
							
							<small className="counted">Follow me on</small>

							<div className="socials">
								
								
								<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/seif-gharres-977795172/" className="social-icon icon-only fc" >
									<i className="fab fa-linkedin" />
								</a>
								<a href="https://www.facebook.com/profile.php?id=100010376260550" target="_blank" rel="noopener noreferrer" className="social-icon icon-only li" >
									<i className="fab fa-facebook-square" />
								</a>
								<a href="https://github.com/seifgh" target="_blank" rel="noopener noreferrer" className="social-icon icon-only gi" >
									<i className="fab fa-github-square" />
								</a>
								
							</div>
						</div>
					</div>
				</div>

				<div className="dev-card">
					<div className="top-bar">
						<div className="image">
							<Image src={ramsisImage} />
						</div>
						<div className="name">
							<h3>Ramsis Hammadi</h3>
							<small>Data Analyst</small>
						</div>
					</div>
					<div className="details">
						<div className="sub-title" ><small>Who am i ?</small><span></span></div>
						<p className="paragraph">
						I'm a machine learning/deep learning enthusiast. I work extensively on Open-cv and Tensorflow.
						</p>
						<div className="sub-title" ><small>Skills</small><span></span></div>
						<div className="skills">
							<small className="counted" >Python</small>
							<small className="counted" >Machine Learning/Deep learning</small>
							<small className="counted" >Data visualization with R</small>

						</div>
						<div className="sub-title" ><small>contact</small><span></span></div>
						
						<div className="contact">
							<small className="counted"> For Business inquiries</small>
							<span className="mail" >ramsishammadi@ieee.org</span>
							
							<small className="counted">Follow me on</small>

							<div className="socials">
								
								
								<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hammadi-ramsis-799b231a3/" className="social-icon icon-only fc" >
									<i className="fab fa-linkedin" />
								</a>
								<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ramsis.benhammadi/" className="social-icon icon-only li" >
									<i className="fab fa-facebook-square" />
								</a>
								<a target="_blank" rel="noopener noreferrer" href="https://github.com/Rams901" className="social-icon icon-only gi" >
									<i className="fab fa-github-square" />
								</a>
								
							</div>
						</div>

					</div>
				</div>

			</div>
		</div>
	)
}

export default About;