

function appReducer( state, { payload, type } ){


	switch( type){

		case 'SET_COUNTRIES':
			return { ...state, countries: payload.countries };

		case 'SET_PREDICTIONS':
			return { ...state, predictions: payload.predictions };

		case 'SET_OFFILINE':
			return { ...state, is_offline: payload.is_offline };
			
		default : return state;
	}
}

export default appReducer;