// libraries
import React, { useState, useEffect, useRef, useContext } from 'react';
import {Helmet} from 'react-helmet';
import Chart from 'chart.js';
import {
  Link, useParams, Redirect
} from "react-router-dom";

// React hooks
import { GlobalContext } from './../../state-manager/globalState';

// Components
import { DAYS_NUMBER } from './../../settings';
import {formatDateToMonth, getTable, formatNumber} from './../../utils/utils';

function CountryPredictions() {

	// Canvas elements for drawing
 	const ctxLine = useRef(null);
 	const ctxDoughnut = useRef(null);

 	// react hooks
	const { getCountry, predictions, setPredictions, fetchPredictions  } = useContext( GlobalContext );
 	const [ isLoading, setIsLoading ] = useState(true);
 	const [ country, setCountry ] = useState(null);
 	const [ table, setTable ] = useState([
 		{ month: 'Mars',  deaths:0, cases:0 },
 		{ month: 'April', deaths:0, cases:0 },
 		{ month: 'May', deaths:0, cases:0 },
 		{ month: 'June', deaths:0, cases:0 },
 	]);


	const { id } = useParams();


	useEffect( () => {

 		// get  The necessary data
		setCountry(getCountry(Number(id)));
 		fetchPredictions(id)
		.then( ( predictions ) =>{
			setPredictions(predictions);
			setIsLoading(false);
			setTable( getTable(predictions) );
		})
		.catch( ( { err, predictions} ) =>{
			setPredictions(predictions);
			setIsLoading(false);
		});


 	}, []);

 	useEffect( () => {
 		// start drawing after fetching data
 		if ( ! isLoading && ! predictions.has_error ){
	 		const primaryColorLight = "rgba(83, 109, 254, .6)";
	 		const primaryColor = "rgba(83, 109, 254, 1)";

	 		const secondaryColor = "tomato";
	 		const greenColor = "#4CA745";


	 		// Draw Line

	 		const scatterDataSet = [
	 			 {
				    label: 'Infections',
            position: "bottom",
				    borderColor: primaryColorLight ,
				    color: primaryColorLight,
            pointBorderColor: primaryColorLight,
            pointBackgroundColor: primaryColorLight ,
            fill: true,
            showLine: true,
            borderWidth: 1,
					  backgroundColor: primaryColorLight,
				    data: predictions.cases.data,
				  },{
				    label: 'Deaths',
				    borderColor: secondaryColor,
            pointBorderColor: secondaryColor,
            pointBackgroundColor: secondaryColor,
            fill: true,
            showLine: true,
					  backgroundColor: secondaryColor,
				    data: predictions.deaths.data,
				}
	 		];
			const scatterChart = new Chart(ctxLine.current,{
					type: 'scatter',
					data: {
					  datasets: scatterDataSet,
					},
					options: {
            legend: {
               display: true,
               position: 'top',

               labels: {
                   fontColor: '#333',
                   padding: 10,
                    fontSize: 14,
                   usePointStyle: true,
               }
            },
						tooltips: {
				          callbacks: {
				                title: function(values) {
				                  const date = predictions.deaths.data[values[0].xLabel].date;
				                  const month = formatDateToMonth(date);

				                  return month ? month: `Date: ${date}`;
				                },
				                label: function(value) {
				                  return ' ' + value.yLabel.toLocaleString();
				                }
				              }
				      },
						elements: {
		                    point:{
		                        radius: 1,
		                        // borderDash: [3,],
		                    }
		                },

					  responsive: true,
					  scales: {
			            xAxes: [{
			                gridLines: {
			                    zeroLineColor: "transparent"
							},
			                ticks: {
			                	autoSkip: false,
			                	stepSize: 1,
			        			min:0,
			        			max: DAYS_NUMBER,
			                    padding: 20,
			                    fontSize: 14,
			                    fontColor: "rgba(0,0,0,0.5)",
			                    callback: ( value, index ) => {
			                    	return formatDateToMonth(predictions.cases.data[index].date);
			                    	// console.log(index, value);
			                    },
			                    fontStyle: "bold",
			                }
			            }],
			            yAxes: [{
			                ticks: {
			                    fontColor: "rgba(0,0,0,0.5)",
			                    fontStyle: "bold",
			                    beginAtZero: true,
			                    // maxTicksLimit: 5,
			                    padding: 20,
			                    callback: ( value ) => formatNumber(value),

			                },
			                gridLines: {
			                    padding: 20,
			                    zeroLineColor: "transparent"
			                }
						}],
					  }
					}
			})


			const { deaths, cases, recovered } = country;
			// Draw Pie
			const myDoughnutChart = new Chart(ctxDoughnut.current, {
			    type: 'doughnut',
			    data:{
				    datasets: [{
				        data: [
				        	deaths,
				        	cases,
				        	recovered
				        ],
				        fill: true,
	            		backgroundColor: [
				            secondaryColor,
				            primaryColor,
				            greenColor
			            ],

					 }],

				    // These labels appear in the legend and in the tooltips when hovering different arcs
				    labels: [
				        'Deaths',
				        'Infections',
				        'Recovered'
				    ]
				},
				options: {
          legend: {
             display: true,
             position: 'top',

             labels: {
                 fontColor: '#333',
                 padding: 20,
                 fontSize: 14,
                 usePointStyle: true,
             }
          },
					cutoutPercentage: 50
				}
			});
		}

 	}, [isLoading]);





 	if ( isLoading )

 		return (
 			<div className="predictions">
 				<div className="loading">Loading</div>
 			</div>
 		)

 	if ( country && !isLoading ){
 		// necessary data for rendering
 		const { name, deaths, cases, recovered  } = country;
 		if ( predictions && predictions.has_error )
 			return (
 			   <div className="predictions">
	 			   <Helmet>
						<title> {name} predictions - Covid-19 ai predictions</title>
		    			<meta name="description" content={`Predictions of the number of infected cases in ${name} ( Mars - June )`} />
					</Helmet>
					<div className="top-bar">
						<Link to="/predictions" className="btn-back icon-only" ><i className="fa fa-arrow-left"/> </Link>
						<h1 className="title" >Predictions of the number of infected cases in {name} ( Mars - June )</h1>
					</div>
		        <div className="error">Oops, something went wrong while loading data. Repeate later please !</div>
		      </div>
 			)

    const cases_rate = predictions.cases.rate, deaths_rate = predictions.deaths.rate ,recovered_rate = predictions.recovered.rate;
		return (
			<div className="predictions">
				<Helmet>
					<title> {`${name} predictions - Covid-19 ai predictions`}</title>
		    	<meta name="description" content={`Predictions of the number of infected cases in ${name} ( Mars - June )`} />
				</Helmet>
				<div className="top-bar">
					<Link to="/predictions" className="btn-back icon-only" ><i className="fa fa-arrow-left"/> </Link>
					<h1 className="title" >Predictions of the number of infected cases in {name} ( Mars - June )</h1>
				</div>
				<div className="details">

					<div className="chart-infos">
						<div className="chart">
							<canvas width="120%" height="80%"  ref={ ctxLine } />
						</div>
						<div className="infos">
            <div className="rates">
              <div className="card">
                <h6>Infections</h6>
                <small className={`rate ${cases_rate < 0 ? 'up':'down'}`} ><i className={`fa fa-long-arrow-alt-${cases_rate < 0 ? 'down':'up'}`} /> {`${Math.abs(cases_rate)}%`}  </small>
              </div>
              <div className="card">
                <h6>Deaths</h6>
                <small className={`rate ${cases_rate < 0 ? 'up':'down'}`} ><i className={`fa fa-long-arrow-alt-${cases_rate < 0 ? 'down':'up'}`} /> {`${Math.abs(deaths_rate)}%`} </small>
              </div>
              <div className="card">
                <h6>Recovered</h6>
                <small className={`rate ${cases_rate < 0 ? 'down':'up'}`} ><i className={`fa fa-long-arrow-alt-${cases_rate < 0 ? 'down':'up'}`} /> {`${Math.abs(recovered_rate)}%`} </small>
              </div>
            </div>
			    		<h3>Total of today:  { cases + deaths  } </h3>

			    		<canvas width="120%" height="100%"  ref={ ctxDoughnut } />

						</div>
					</div>
					<h1 className="title" >Average prediction per month</h1>
					<div className="table-3">

						<div className="line">
							<span> <small className="bold-md" >Month</small> </span>
							<span> <small className="bold-md" >Infections</small> </span>
							<span> <small className="bold-md" >Deaths</small> </span>

						</div>
						{
							table.map( ({month, deaths, cases}, i) =>(
								<div key={i} className="line">
									<span> <small className="bold-md" >{month}</small> </span>
									<span> <small>{cases >= 0 ? cases.toLocaleString():0}</small> </span>
									<span> <small>{deaths >= 0 ? deaths.toLocaleString():0}</small> </span>
								</div>
							))
						}


					</div>
				</div>

			</div>
		);
	}
	return (
		<Redirect to="/" />
	)

}

export default CountryPredictions;
