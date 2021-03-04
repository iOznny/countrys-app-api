import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})

export class CountryComponent {

  public country: string;
  public countries: Country[] = [];
  public alert: boolean = false;

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

  assistant(e: string) {
    this.alert = false;

    // Crear subgerencias.

  }

}
