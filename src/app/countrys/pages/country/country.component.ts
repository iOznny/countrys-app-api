import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})

export class CountryComponent {

  public country: string;
  public countries: Country[] = [];
  public countriesSub: Country[] = [];

  public alert: boolean = false;
  public seeSub: boolean = false;

  constructor(private countryService: CountryService) { }

  // Buscar country.
  search(t: string) {
    // Alerta
    this.alert = false;
    this.country = t;

    this.countryService.searchCountry(t).subscribe( resp => {
      this.countries = resp;
    }, (err) => {
      this.countries = [];
      this.alert = true;
    });
  }

  // Crear subgerencias.
  assistant(t: string) {
    this.alert = false;
    this.country = t;
    this.seeSub = true;

    // Obtenermos los paises con el termino y los desplegamos de 5.
    this.countryService.searchCountry(t)
      .subscribe(countries => this.countriesSub = countries.splice(0, 5),
      (err) => this.countriesSub = []
      );
  }

  searchSug(t: string) {
    this.search(t);
    this.seeSub = false;
  }

}
