// libraries
import React, {useContext, useState} from 'react';
import {Helmet} from 'react-helmet';

// react hooks
import { GlobalContext } from './../../state-manager/globalState';


// components
import CountryCard from './countryCard';

function Predictions() {

  const { countries } = useContext( GlobalContext );
  const [ filtredCountries, setFiltredCountries ] = useState( countries );
  const [ searchKey, setSearchKey ]  = useState('')
  const { data , has_error } = filtredCountries || countries ;

  function handleChangeSearchKey( search_key ){
    if ( !search_key.includes('  ') ){
      setSearchKey( search_key );


      if ( search_key ){
        // split the words
        const search_keys = search_key.split(' ');
        const newData = countries.data.filter( (country) => {

          const country_name = country.name.toLowerCase();
          for (let i =0; i < search_keys.length; i++){
            if ( ! country_name.includes(search_keys[i].toLowerCase()) ){
              return false;
            }
          }
          return true;

        });
        setFiltredCountries( { ...filtredCountries, data: newData } );
      }else{
        setFiltredCountries( countries );
      }
    }
  }

  if ( has_error )
    return (
      <div className="countries">
        <Helmet>
          <title> Countries predictions - Covid-19 ai predictions</title>
          <meta name="description" content="Covid-19 predictions for infected countries" />
        </Helmet>

        <h1 className="title" > Available countries </h1>
        <div className="error">Oops, something went wrong while loading countries. Repeate later please !</div>
      </div>
    )

  if ( data && data.length === 0 )
    return (
      <div className="countries">
        <Helmet>
          <title> Countries predictions - Covid-19 ai predictions</title>
          <meta name="description" content="Covid-19 predictions for infected countries" />
        </Helmet>

        <h1 className="title" > Available countries  </h1>
        <div className="search" method="get" >
          <input onChange={ ( e ) => handleChangeSearchKey(e.target.value) } type="text" value={ searchKey } placeholder="Search for a country"/>
          <button><i className="fa fa-search"  /></button>
        </div>
        <div className="error">Oops, we have no countries to display</div>
      </div>
    )

  return (

    <div className="countries">
     <Helmet>
        <title> {` ${data.length} Countries predictions - Covid-19 ai predictions `}</title>
        <meta name="description" content={"Covid-19 predictions of more than ${data.length - 1} infected countries"} />
      </Helmet>
    	<h1 className="title" > Available countries  </h1>

      <div className="search" method="get" >
        <input onChange={ ( e ) => handleChangeSearchKey(e.target.value) } type="text" value={ searchKey } placeholder="Search for a country"/>
        <button><i className="fa fa-search"  /></button>
      </div>

    	<div className="container">
    		{
    			data.map( country => (
    				<CountryCard key={ country.id } {...country} />
    			))
    		}
    	</div>
    </div>

  );
}

export default Predictions;
