
const DEBUG = false

export const WEB_HOST = DEBUG ? 'localhost:300/':'/';

export const WEB_API_HOST = `${WEB_HOST}api/`;





export const API_URLS = {
	countries: `${WEB_API_HOST}countries`, // no params
	country_predictions: `${WEB_API_HOST}country/predictions`,  // id
};

export const homeImage = `${WEB_HOST}static/static/media/homeImage.87ae5d21.png`;
export const resourceImage = `${WEB_HOST}static/static/media/resourcesImage.9535de54.png`;

export const ieeeIssatImage = `${WEB_HOST}static/static/media/ieeeIssatImage.png`;
export const ieeeImage = `${WEB_HOST}static/static/media/ieeeImage.png`;
export const ieeeTnImage = `${WEB_HOST}static/static/media/ieeeTnImage.png`;


export const ramsisImage =  `${WEB_HOST}static/static/media/ramsis_image.jpeg`;
export const seifImage =  `${WEB_HOST}static/static/media/seif_image.jpeg`;


export const googleTrackingId = "UA-161927570-1-wrong-code";

export const DAYS_NUMBER = 92;
