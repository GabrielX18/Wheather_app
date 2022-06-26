"use strict"

import { wheader, locate } from "./wheatherAPI.js"
import {UI,contentSearch,wheathersearch} from "./UI.js";
import { futureAPI } from "./wheatherFutureAPI.js";


const clime= new wheader("Monseñor nouel");
const ui= new UI();
const futureClime= new futureAPI(clime.city)


console.log(locate)


export async function requestAPI(){
    const data=  await clime.getWheather();
    const dataForecast=  await futureClime.getFuture();
    console.log(data)
    futureClime.getFuture()
    clime.geolocation(locate[0],locate[1])
    ui.render(data, dataForecast)
}

const buttonSend= document.getElementById("buttonSend").addEventListener("click",e=>{
    const searchInputValue= document.getElementById("buttonSearch").value
    clime.changeLocation(searchInputValue)
    requestAPI()
})
  

const searchGeolocation= document.getElementById("searchGeolocation").addEventListener("click",async ()=>{
    wheathersearch.style.display = "flex";
    contentSearch.style.display = "none";
    const data= await clime.geolocation(locate[0],locate[1]);
    const dataForecast=  await futureClime.getFuture();
    ui.render(data,dataForecast) 
})



document.addEventListener("DOMContentLoaded", requestAPI())

