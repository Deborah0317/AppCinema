import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './main/header/header.component';
import { MainComponent } from './main/main.component';
import { SchedaComponent } from './scheda/scheda.component';
import { DetailsComponent } from './scheda/details/details.component';
import { BodyComponent } from './main/body/body.component';

const routes: Routes = [{
  path:'',
  redirectTo: 'cinema',
  pathMatch: 'full'
},
{
  path:'cinema',
  component: MainComponent
},
{
  path:'film/:id',
  component: SchedaComponent
},
{
  path:'cinema/:user',
  component: MainComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }