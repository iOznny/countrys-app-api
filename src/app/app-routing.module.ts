import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CapitalComponent } from './countrys/pages/capital/capital.component';
import { CountryComponent } from './countrys/pages/country/country.component';
import { RegionComponent } from './countrys/pages/region/region.component';
import { SeeCountryComponent } from './countrys/pages/see-country/see-country.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CountryComponent},
  { path: 'region', component: RegionComponent },
  { path: 'capital', component: CapitalComponent },
  { path: 'country/:id', component: SeeCountryComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
