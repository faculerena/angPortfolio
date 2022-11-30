import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, concat } from "rxjs";
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }


  obtenerDatos():Observable<any>{
    
    return this.http.get('./assets/data.json');

  }
}
