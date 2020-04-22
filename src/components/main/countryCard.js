// libraries
import React from 'react';
import {
  Link
} from "react-router-dom";

// Utils
import  {formatNumber} from './../../utils/utils';

// utils components
import Image from './../../utils/components/Image';


function DangerStatus({status}){

    switch( status ){
        case 'dz':
            return(
                <span className="status dz" > Danger zone </span>
            )
        case 'wz':
            return(
                <span className="status wz" > Warning zone </span>
            )
        case 'sz':
            return(
                <span className="status sz" > Safe zone </span>
            )

        default: 
            return null
    } 
}


function countryCard({ id, image, continent, name,  deaths, cases, status }) {
  
  
  return (
    
    <div className="country-card">

        <DangerStatus  status={status}  />

    	<div className="top-bar">
    		<div className="image">
    			<Image src={ image.src }  />
    		</div>
    		<div className="name" >
    			<h4>{ name }</h4>
    			<small>{continent}</small>
    		</div>
    	</div>
    	<div className="details">
    		
    		<div className="info">
    			<small>{formatNumber(deaths)}</small>
    			<span>Deaths</span>
    		</div>

    		<div className="info">
    			<small>{formatNumber(cases)}</small>
    			<span>Infections</span>
    		</div>

    		<Link to={`/predictions/country/${id}`}  className="btn-primary small round " >See more <i className="right fa fa-arrow-right"/> </Link>
    		
    	</div>

    </div>

  );
}


export default countryCard;