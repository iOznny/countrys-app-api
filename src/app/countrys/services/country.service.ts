import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  private _url: string = 'https://restcountries.eu/rest/v2';

  get paramsHttp() {
    return new HttpParams().set('fileds', 'name;capital;alpha3Code;flag;population;');
  }

  constructor(private http: HttpClient) { }

  // Busqueda por país.
  searchCountry(t: string): Observable<Country[]> {
    //return this.http.get(`${ this._url }/name/${ t }`).pipe( catchError( err => of([])) );
    return this.http.get<Country[]>(`${ this._url }/name/${ t }`, { params: this.paramsHttp });
  }

  // Busqueda por capital.
  searchCapital(t: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${ this._url }/capital/${ t }`, { params: this.paramsHttp });
  }

  // Busqueda por código de país.
  searchCountryCode(id: string): Observable<Country> {
    return this.http.get<Country>(`${ this._url }/alpha/${ id }`);
  }

  // Busqueda por región.
  searchRegion(r: string): Observable<Country[]> {    
    return this.http.get<Country[]>(`${ this._url }/region/${ r }`, { params: this.paramsHttp });
  }

}
