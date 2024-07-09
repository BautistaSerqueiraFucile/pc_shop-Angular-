import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcComputersComponent } from './pc-computers/pc-computers.component';
import { PcAboutComponent } from './pc-about/pc-about.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'computers',
    pathMatch:'full'
  },
  {
    path:'computers',
    component: PcComputersComponent
  },
  {
    path:'about',
    component: PcAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
