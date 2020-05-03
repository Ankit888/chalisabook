import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {HomeComponent} from './home/home.component';
import{PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ContactusComponent} from './contactus/contactus.component';
import {ComingsoonComponent} from './comingsoon/comingsoon.component';
import {HanumanComponent} from './hanuman/hanuman.component';
import {ChalisaComponent} from './chalisa/chalisa.component';

const routes: Routes = [
  {path:'', redirectTo: '/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'home/:id',component:ChalisaComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'comingsoon',component:ComingsoonComponent},
  {path:'departments',component:DepartmentListComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:"**",component:PageNotFoundComponent}
  
];

@NgModule({
  imports: 
   [RouterModule.forRoot(routes , {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[DepartmentListComponent,EmployeeListComponent,HomeComponent,PageNotFoundComponent];
