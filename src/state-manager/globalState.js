import React, { createContext, useReducer } from 'react';
import axios from 'axios';


import { API_URLS } from './../settings';


import appReducer from './reducer.js';


const initialState = {
	is_offline: false,
	countries: {
		data: [],
		has_error: false
	},
	predictions: {
		/* predictions are an array of an object ( {x: int, y: int} ) 
		   to draw the line graph 
		*/
		deaths: [],
		cases: [],
		has_error: false
	}
}

// Create context sub component
export const GlobalContext =  createContext( initialState );

// Create provider component

export function GlobalProvider( { children } ){

	const [ state, dispatch ] = useReducer( appReducer, initialState );

	function fetchCountries(){

		return new Promise( ( resolve, reject ) => {
			const countries = { data: [], has_error: false };
			axios.get( API_URLS.countries )
			.then(( response )=>{
				countries.data = response.data.countries;
				resolve( countries );
			})
			.catch((err)=>{
				countries.has_error = true;
				reject( { err, countries } );
			})

		})
	}

	function setCountries(countries){
		dispatch({
			type : 'SET_COUNTRIES',
			payload: { countries, }
		})
	}

	function fetchPredictions(id){

		return new Promise( ( resolve, reject ) => {
			const predictions = { deaths:[], cases:[], recovered:[], has_error: false };

			axios.get( `${API_URLS.country_predictions}/${id}` )

			.then(( response )=>{
				const { deaths, cases, recovered } = response.data.predictions;
				predictions.deaths =  deaths;
				predictions.cases =  cases;
				predictions.recovered =  recovered;
				resolve( predictions );
			})

			.catch((err)=>{
				predictions.has_error = true;
				reject({err, predictions});
			})

		})
	}

	function setPredictions(predictions){
		dispatch({
			type : 'SET_PREDICTIONS',
			payload: { predictions, }
		})
	}

	function setOffline(bool){
		dispatch({
			type: 'SET_OFFILINE',
			payload: { is_offline: bool, },
		})
	}

	const getCountry = (id) =>  state.countries.data.filter( country => country.id === id )[0] || null;


	const providerValue = {
		// state
		is_offline: state.is_offline,
		countries: state.countries,
		predictions: state.predictions,
		
		// set state functions
		fetchCountries,
		setCountries,

		fetchPredictions,
		setPredictions,
		getCountry,

		setOffline,
	}

	return (

		<GlobalContext.Provider value={ providerValue } >
			{ children }
		</GlobalContext.Provider>
	)
};
