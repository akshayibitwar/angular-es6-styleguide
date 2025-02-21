import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './shared/component/comp1/comp1.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

