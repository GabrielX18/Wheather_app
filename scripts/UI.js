"use strict"

const contentLeft= document.getElementById("contentLeft")
export const wheathersearch= document.getElementById("wheather_search_city")

export const contentSearch= document.getElementById("contentSearch")
// export const buttonSearch= document.getElementById("buttonSearch")
// const buttonSend= document.getElementById("buttonSend")

import{requestAPI} from "./main.js"

wheathersearch.addEventListener("click",e=>{
    wheathersearch.style.display="none";
    contentSearch.style.display="flex"
})

/* searchGeolocation.addEventListener("click",e=>{
    wheathersearch.style.display="flex";
    contentSearch.style.display="none"
}) */

// buttonSend.addEventListener("click",requestAPI())
   






export class UI{
    constructor(){

        /*Left side*/
        this.temperture= document.getElementById("wheather-temperture"),
        this.description= document.getElementById("wheather-description"),
        this.ilustratorLeft= document.getElementById("whether-principal-ilustrator"),
        this.day= document.getElementById("wheather-day"),
        this.date= document.getElementById("wheather-date"),
        this.location= document.getElementById("wheather-location"),
        /* Right side */
        
        /*Forecast*/

        /*Present day*/
        this.ilustratorForecastPresent= document.getElementById("wheather-forecast-ilustrator-present"),
        this.maxTempForecastPresent= document.getElementById("wheather-forecast-tempMax-present"),
        this.minTempForecastPresent= document.getElementById("wheather-forecast-tempMin-present"),
        /*Tomorrow day*/
        this.ilustratorForecastTomorrow= document.getElementById("wheather-forecast-ilustrator-tomorrow"),
        this.maxTempForecastTomorrow=document.getElementById("wheather-forecast-tempMax-tomorrow"),
        this.minTempForecastTomorrow=document.getElementById("wheather-forecast-tempMin-tomorrow"),

        /*Third day*/
        this.ilustratorForecastThirdDay= document.getElementById("wheather-forecast-ilustrator-thirdDay"),
        this.maxTempForecastThirdDay= document.getElementById("wheather-forecast-tempMax-thirdDay"),
        this.minTempForecastThirdDay= document.getElementById("wheather-forecast-tempMin-thirdDay"),



         /*Hight light*/
        this.speedWind= document.getElementById("wheather-speedWind"),
        this.humidity= document.getElementById("wheather-humidity"),
        this.visibility= document.getElementById("wheather-visibility"),
        this.airPresure= document.getElementById("wheather_airPresure")
    }

    render(API, APIForecast){
        /*Left side*/
        this.temperture.textContent= API.current.temp_c;
        this.description.textContent= API.current.condition.text;
        // this.ilustratorLeft.src= API.current.condition.icon; 
        if (this.description.textContent.includes("Soleado")||this.description.textContent.includes("soleado")) { 
            this.ilustratorLeft.src="sources/icon/wheather_icon/animated/day.svg"
            this.ilustratorForecastPresent.src="sources/icon/wheather_icon/animated/day.svg";  
            this.ilustratorForecastTomorrow.src= "sources/icon/wheather_icon/animated/day.svg";  
            this.ilustratorForecastThirdDay.src= "sources/icon/wheather_icon/animated/day.svg";
        }else if(this.description.textContent.includes("Lluvia")||this.description.textContent.includes("lluvia")){
            this.ilustratorLeft.src="sources/icon/wheather_icon/animated/rainy-5.svg";
            this.ilustratorForecastPresent.src="sources/icon/wheather_icon/animated/rainy-5.svg";
            this.ilustratorForecastTomorrow.src="sources/icon/wheather_icon/animated/rainy-5.svg";
            this.ilustratorForecastThirdDay.src= "sources/icon/wheather_icon/animated/rainy-5.svg";
        }else if(this.description.textContent.includes("Despejado")||this.description.textContent.includes("despejado")){
            this.ilustratorLeft.src="sources/icon/wheather_icon/animated/cloudy.svg";
            this.ilustratorForecastPresent.src= "sources/icon/wheather_icon/animated/cloudy.svg";
            this.ilustratorForecastTomorrow.src= "sources/icon/wheather_icon/animated/cloudy.svg";
            this.ilustratorForecastThirdDay.src= "sources/icon/wheather_icon/animated/cloudy.svg";
        }else if(this.description.textContent.includes("Nublado")||this.description.textContent.includes("nublado")){
            this.ilustratorLeft.src='sources/icon/wheather_icon/animated/cloudy-day-1.svg'; 
            this.ilustratorForecastPresent.src='sources/icon/wheather_icon/animated/cloudy-day-1.svg'; 
            this.ilustratorForecastTomorrow.src= 'sources/icon/wheather_icon/animated/cloudy-day-1.svg'; 
            this.ilustratorForecastThirdDay.src= 'sources/icon/wheather_icon/animated/cloudy-day-1.svg'; 
        }else if(this.description.textContent.includes("Ligeras precipitaciones")){
            this.ilustratorLeft.src='sources/icon/wheather_icon/animated/rainy-3.svg'; 
            this.ilustratorForecastPresent.src='sources/icon/wheather_icon/animated/rainy-3.svg'; 
            this.ilustratorForecastTomorrow.src= 'sources/icon/wheather_icon/animated/rainy-3.svg'; 
            this.ilustratorForecastThirdDay.src='sources/icon/wheather_icon/animated/rainy-3.svg'; 
        }



        /* Right side */

        /*Forecast*/

        /*Present day*/
        this.maxTempForecastPresent.textContent= Math.round(APIForecast.forecast.forecastday[0].day.maxtemp_c)+"°C"; 
        this.minTempForecastPresent.textContent=Math.round(APIForecast.forecast.forecastday[0].day.mintemp_c)+"°C";
        /*Tomorrow day*/
        this.maxTempForecastTomorrow.textContent=  Math.round(APIForecast.forecast.forecastday[1].day.maxtemp_c)+"°C"; 
        this.minTempForecastTomorrow.textContent= Math.round(APIForecast.forecast.forecastday[1].day.mintemp_c)+"°C";

        /*Third day*/
        this.maxTempForecastThirdDay.textContent= Math.round(APIForecast.forecast.forecastday[2].day.maxtemp_c)+"°C";
        this.minTempForecastThirdDay.textContent= Math.round(APIForecast.forecast.forecastday[2].day.mintemp_c)+"°C";



        /*Hight light*/
        this.speedWind.textContent= API.current.wind_mph;
        this.humidity.textContent= API.current.humidity+"%";
        this.visibility.textContent= API.current.vis_miles+" miles";
        this.airPresure.textContent=API.current.pressure_mb+" mb"


        this.location.textContent= API.location.name+` /${API.location.country}`;
    }
}


