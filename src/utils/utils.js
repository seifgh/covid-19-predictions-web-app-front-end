
export function formatNumber(number){

	if ( number < 1000 )
		return number
	// 1.5M format
	if ( number >= 1000000){
		const beforeComma = Math.trunc( number / 1000000 );
		const afterComma  = Math.trunc((number % 1000000) / 100000);

		return afterComma === 0 ? `${beforeComma}M`:`${beforeComma},${afterComma}M`;
	}
	// 1.5K format
	if ( number >= 1000 ){
		const beforeComma = Math.trunc( number / 1000 );
		const afterComma  = Math.trunc((number % 1000) / 100);

		return afterComma === 0 ? `${beforeComma}K`:`${beforeComma},${afterComma}K`;
	}

}


export function formatDateToMonth(value){
	switch  ( value ){
		case "03/02": return 'Mars';
		case "04/01": return 'April';
		case "05/01": return  'May';
		case "06/01": return 'June';
		default: return null
	}
}

export function getTable(predictions){

	const table = [];
	const deaths = predictions.deaths.data , cases = predictions.cases.data;
	for (let i=0; i < deaths.length; i++){

		const month = formatDateToMonth( deaths[i].date );

		if ( month  ){
			table.push({
				month: month,
				deaths: month !== 'June' ? deaths[i + 29].y :deaths[i].y,
				cases: month !== 'June' ? cases[i + 29].y :cases[i].y
			})
		}
	}

	return table;
}

export function calcPercent( total, value ){

	const calc = Math.trunc( (value / total) * 100 );
	return 	calc
}

// export function CheckWordsInParagraph( words, pragraph ){

// }
