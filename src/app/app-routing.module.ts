import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './main/header/header.component';
import { MainComponent } from './main/main.component';
import { SchedaComponent } from './scheda/scheda.component';
import { DetailsComponent } from './scheda/details/details.component';

const routes: Routes = [{
  path:'',
  redirectTo: 'main',
  pathMatch: 'full'
},
{
  path:'main',
  component: MainComponent
},
{
  path:'scheda/:id',
  component: SchedaComponent
},
 { path: 'scheda',
   component: SchedaComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
