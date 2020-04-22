// libraries
import React, { useContext, useState, useEffect } from 'react';
import { Route } from "react-router-dom";

// react hooks
import { GlobalContext } from './../state-manager/globalState';



// components
import Home from './main/Home';
import Predictions from './main/Predictions';
import CountryPredictions from './main/CountryPredictions';
import About from './main/About';
import Resources from './main/Resources';






function Main() {

	// react hooks
	const { setCountries, fetchCountries, setOffline, is_offline } = useContext( GlobalContext );
	const [ isLoading, setIsLoading ] = useState(true);
	
	// fetch the data when the component did mount
	useEffect( () => {
		
		fetchCountries()
		.then( ( countries ) =>{
			setCountries(countries);
			setIsLoading(false);
		})
		.catch( ( { err, countries} ) =>{
			setCountries(countries);
			setIsLoading(false);
		});
		setOffline(!navigator.onLine);
		window.addEventListener('offline',  () =>{setOffline(true) });
     	window.addEventListener('online', () =>{setOffline(false) });

	},[]);

	if ( isLoading )
		return <main> <div className="loading">Loading</div> </main>

	return (
		<main>
			<Route exact path="/" component={Home} />
			<Route exact path="/predictions" component={Predictions} />
			<Route exact path="/predictions/country/:id" component={CountryPredictions} />
			
			<Route exact path="/about" component={About} />
			<Route exact path="/resources" component={Resources} />


			
			<div  className={`hash${is_offline ? ' hide':''}`}>
	          <h4>#stayAtHome</h4>
	          <h4>#staySafe</h4>
	        </div>
	     
	      <div className={`notifier${is_offline ? ' show':''}`}>
	    
	        <p>Oops, looks like you're offline !</p>
	      </div>
			
		</main>
	);
}


export default Main;
