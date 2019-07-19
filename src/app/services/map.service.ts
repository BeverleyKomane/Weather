import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {
    
  appid = '18bba0fc007b93119d95a780f0233e09';
  
    constructor(private http: HttpClient) {}

    getWeatherData(city:string){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+city +'&units=metric&APPID=' + this.appid);
    
   }
}