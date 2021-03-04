import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputSearchComponent } from './components/country-input-search/country-input-search.component';

@NgModule({
  declarations: [
    CapitalComponent, 
    CountryComponent, 
    RegionComponent, 
    SeeCountryComponent, CountryTableComponent, CountryInputSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CapitalComponent, 
    CountryComponent, 
    RegionComponent, 
    SeeCountryComponent
  ]
})

export class CountrysModule { }
