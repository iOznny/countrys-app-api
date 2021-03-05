import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/countries.interface';

import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})

export class SeeCountryComponent implements OnInit {

  public country!: Country;

  constructor(private route: ActivatedRoute, private _countryService: CountryService) { }

  ngOnInit(): void {
    // Obtener pais buscado.
    this.route.params
      .pipe( 
        switchMap( ({ id }) => this._countryService.searchCountryCode(id))
      )
      .subscribe( resp => this.country = resp);
  }

}
