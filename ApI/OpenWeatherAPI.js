import {weatherkeys} from "./weatherkeys.js"

/**
 *gets forcast from open weather API
 * @param {number} lat - latitude of coordinates
 * @param {number} lng - longitude of coordinates

 */
const getForcast = async(lat, lng)=>{
    if (Array.isArray(lat)){
        lng = lat [1];
        lat = lat [0]
    }


    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${weatherkeys}`;
    const  options = {
        method: "GET",
    };
    const response = await fetch(url, options);
    const data =await response.json();
    return data
}