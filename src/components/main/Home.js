// libraries
import React from 'react';
import {Helmet} from 'react-helmet';
import {
  Link
} from "react-router-dom";

import Image from './../../utils/components/Image';
import {homeImage} from './../../settings.js';



function Home() {
  return (
    
    <div className="home">
	    <Helmet>
	       <title>Covid-19 ai predictions</title>
	       <meta name="description" content="This is a project dedicated to the current situations and to make people aware of how severe it might get.
 We've used machine learning skills to predict the confirmed cases/deaths in infected countries with Covid-19. Note: these predictions are bases on a Worst-Case scenario" />
	    </Helmet>
    	<div className="details">
	    	<h1 className="title" > Covid-19 Ai Predictions </h1>
	    	<p className="paragraph">
	    		Hello visitor, we've took the initiative to create predictions for countries infected. Feel free to take a closer look at  the graphs.
				<br/>Be aware of what we might get ourselves into, if we keep on neglecting the dangers of the current situation.
				<br/>Note: these predictions are bases on a Worst-Case scenario.
				<br/>#StaySafe
			</p>
	    	<div className="btns">
	    		<Link to="/predictions" className="btn-primary hg"   >Predictions</Link>
	    		<Link to="/about" className="btn-outline-primary hg"   >About us</Link>
	    	</div>	
	    </div>
	    <div className="image">
	    	<Image src={homeImage} />
	    </div>
    </div>

  );
}

export default Home;