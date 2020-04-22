// libraries
import React from 'react';
import {Helmet} from 'react-helmet';

// components
import Image from './../../utils/components/Image';

import {resourceImage} from './../../settings.js';


function Resources() {

	return(
		<div className="home">
		<Helmet>
	    	<title> Ressources - Covid-19 ai predictions</title>
	    	<meta name="description" content="We've used the publicly-available data from the Coronavirus COVID-19 Global Cases by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University (JHU)." />
	    </Helmet>
    	<div className="details">
	    	<h1 className="title" > Our resources</h1>
	    	<p className="paragraph">We've used the publicly-available data from the Coronavirus COVID-19 Global Cases by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University (JHU).<br/><br/>Copyright © 2020 Covid-19 Ai predictions TN. All Rights Reserved.</p>
	    		
	    </div>
	    <div className="image">
	    	<Image src={resourceImage} />
	    </div>
    </div>
	)
}


export default Resources;