import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  private _url: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  searchCountry(t: string): Observable<Country[]> {
    //return this.http.get(`${ this._url }/name/${ t }`).pipe( catchError( err => of([])) );
    return this.http.get<Country[]>(`${ this._url }/name/${ t }`);
  }

}
