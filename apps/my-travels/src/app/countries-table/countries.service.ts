import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "./country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  readonly api = 'https://restcountries.com/v3.1/all'

  constructor(private http:HttpClient) {
  }

  getAll():Observable<Country[]>{
    return this.http.get<Country[]>(this.api)
  }
}
