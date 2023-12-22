import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {HouseComponent} from "./components/house/house.component";
import {HomeComponent} from './components/home/home.component';
import { DxLoadIndicatorModule } from 'devextreme-angular';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "house", component: HouseComponent},
  {path: "admin", component: AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    DxLoadIndicatorModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
