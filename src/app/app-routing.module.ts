import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {HouseComponent} from "./components/house/house.component";
import {HomeComponent} from './components/home/home.component';
import { DxLoadIndicatorModule } from 'devextreme-angular';
import {UesrProfilComponent} from "./components/uesr-profil/uesr-profil.component";
import { registerGuard } from './guards/register.guard';
import { authGuard } from './guards/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent,canDeactivate: [registerGuard]},
  {path: "house", component: HouseComponent},
  {path: "admin", component: AdminDashboardComponent,canActivate: [authGuard] },
  {path: "profile", component: UesrProfilComponent},
  {path : 'about' ,  component :  AboutComponent }, 
  {path : 'service' , component : ServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    DxLoadIndicatorModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
