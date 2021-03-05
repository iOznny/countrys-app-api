import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})

export class CapitalComponent {

  public country: string;
  public countries: Country[] = [];
  public alert: boolean = false;

  constructor(private countryService: CountryService) { }

  // Buscar country.
  search(t: string) {
    // Alerta
    this.alert = false;

    this.country = t;

    this.countryService.searchCapital(t).subscribe( resp => {
      this.countries = resp;
    }, (err) => {
      this.countries = [];
      this.alert = true;
    });
  }

}
