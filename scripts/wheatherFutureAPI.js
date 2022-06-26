"use strict"

export class futureAPI{
    constructor(city){
        this.key= "d373d4f7778d4dcba02182405221606",
        this.city= city
    }

    async getFuture(){
        const request= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d373d4f7778d4dcba02182405221606&q=${this.city}&days=5&lang=es`)
        const data= await request.json();
        console.log(data)
        return data;

    }
}