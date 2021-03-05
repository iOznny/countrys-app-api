import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
  ]
})

export class RegionComponent {
  
  public countries: Country[] = [];
  public regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public regionActive: string;

  constructor(private _countrysService: CountryService) { }

  getClass(r: string): string {
    return (r === this.regionActive) ? 'btn btn-primary ms-1': 'btn btn-outline-primary ms-1';
  }

  // Obtenemos los paises por región.
  activeRegion(r: string) {

    if (r === this.regionActive) {
      return;
    }

    this.regionActive = r;

    // API devuelve los paises por región.
    this._countrysService.searchRegion(r).subscribe( resp => this.countries = resp);    
  }
  
}
