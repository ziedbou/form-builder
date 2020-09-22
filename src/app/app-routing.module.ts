import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormViewComponent } from './form-sections/form-view/form-view.component';

const routes: Routes = [
  {
    path:'form', component:FormViewComponent
  },
  {
    path:'', component:FormViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
