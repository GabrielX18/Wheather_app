"use strict"


const geolocation= navigator.geolocation;

const options={
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 0
}

geolocation.getCurrentPosition(getPosition,error,options)

 export const locate=[]





export function getPosition(position) {
    const {latitude,longitude}= position.coords
    /* console.log(latitude)
    console.log(longitude) */
    locate.unshift(latitude,longitude)
    return position
}


function error(error) {
    return console.log(error);
}





export class wheader{
    constructor(city){
        this.key= "d373d4f7778d4dcba02182405221606",
        this.city= city
    }

     async getWheather(){
        try {
            const request= await fetch(`http://api.weatherapi.com/v1/current.json?key=d373d4f7778d4dcba02182405221606&q=${this.city}&lang=es`)
            const data= await request.json()

            // console.log(data)

            return data
        } catch (error) {
            console.log(error)
            alert("Ocurrio un error a la hora de obtener el clima")
        }
    }

    changeLocation(city){
        try {
            this.city= city;
        } catch (error) {
            console.log(error.message)
            alert("Ocurrio un error a la hora de cambiar la ciudad")
        }
    }

    async geolocation(latitude,longitude){
        try {
            this.latitude= latitude,
            this.longitude= longitude

            const request= await fetch(`http://api.weatherapi.com/v1/current.json?key=d373d4f7778d4dcba02182405221606&q=${this.latitude+","+this.longitude}&lang=es`)

            const dataGeolocation= await request.json()

            console.log(dataGeolocation)

            return dataGeolocation;


        } catch (error) {
            console.log(error.message)
            alert("Error al obtenr la geolocalizacion")
        }

    }
}

