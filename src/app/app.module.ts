// import { InjectionToken, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.components';
// import {RegisterComponent} from './components/register/register.components'
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { JwtHelperService } from '@auth0/angular-jwt';


// export function tokenGetter() {
//   return localStorage.getItem("token");
// }

// @NgModule({
//   declarations: [
//     AppComponent,
//     RegisterComponent,

//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//   ],
//   providers: [
//     JwtHelperService,
//     InjectionToken,


//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtModule} from '@auth0/angular-jwt';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
//import { NaviComponent } from './components/nav/nav.components';
//import { CustomerComponent } from './components/customer/customer.components';
//import { RentalComponent } from './components/rental/rental.components';
//import { ColorComponent } from './components/color/color.components';
//import { CarComponent } from './components/car/car.components';
//import { BrandComponent } from './components/brand/brand.components';
//import { CarDetailComponent } from './components/car-detail/car-detail.components';
//import { ColorFilterPipe } from './pipes/color-filter.pipe';
//import { BrandFilterPipe } from './pipes/brand-filter.pipe';
//import { CarFilterPipe } from './pipes/car-filter.pipe';
//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
//import { CarFilterComponent } from './components/car-filter/car-filter.components';


import {ToastrModule} from 'ngx-toastr';
//import { CreditCardComponent } from './components/creditcard/creditcard.components';
//import { CarAddComponent } from './components/pages/admin-dashboard/cars-dashboard/car-add/car-add.components';

//import { BrandAddComponent } from './components/pages/admin-dashboard/brands-dashboard/brand-add/brand-add.components';
//import { FooterComponent } from './components/footer/footer.components';
//import { LoginComponent } from './components/auth/login/login.components';
import {RegisterComponent} from './components/register/register.component';
//import { AdminDashboardComponent } from './components/pages/admin-dashboard/admin-dashboard.components';
//import { ColorsDashboardComponent } from './components/pages/admin-dashboard/colors-dashboard/colors-dashboard.components';
//import { ColorAddComponent } from './components/pages/admin-dashboard/colors-dashboard/color-add/color-add.components';
//import { ColorEditComponent } from './components/pages/admin-dashboard/colors-dashboard/color-edit/color-edit.components';
//import { BrandsDashboardComponent } from './components/pages/admin-dashboard/brands-dashboard/brands-dashboard.components';
//import { BrandEditComponent } from './components/pages/admin-dashboard/brands-dashboard/brand-edit/brand-edit.components';
//import { CarsDashboardComponent } from './components/pages/admin-dashboard/cars-dashboard/cars-dashboard.components';
//import { CarEditComponent } from './components/pages/admin-dashboard/cars-dashboard/car-edit/car-edit.components';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {LoginComponent} from './components/login/login.component';
import {UesrProfilComponent} from './components/uesr-profil/uesr-profil.component';
import {NavComponent} from './components/nav/nav.component';
import {HomeComponent} from './components/home/home.component';
import {FooterComponent} from './components/footer/footer.component';
import {HouseComponent} from './components/house/house.component';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {BedroomComponent} from './components/bedroom/bedroom.component';
import {BedroomFilterPipe} from './pipes/bedroom-filter.pipe';
import {PriceComponent} from './components/price/price.component';
import {PriceFilterPipe} from './pipes/price-filter.pipe';
import {DxDataGridModule, DxLoadIndicatorModule} from "devextreme-angular";
import {AboutComponent} from './components/about/about.component';
import {ServiceComponent} from './components/service/service.component';
//import { HomeComponent } from './components/home/home/home.components';
//import { UserComponent } from './components/auth/user-profil/user-profil.components';
//import { UsereditComponent } from './components/auth/user-profil/useredit/useredit.components';


export function tokenGetter() {
  return localStorage.getItem("token");
}


@NgModule({
  declarations: [
    AppComponent,
    //NaviComponent,
    //CustomerComponent,
    //RentalComponent,
    //CarDetailComponent,

    //CarFilterPipe,
    //CarFilterComponent,
    //CreditCardComponent,
    //CarAddComponent,
    //CarEditComponent,
    //ColorAddComponent,
    //FooterComponent,
    //LoginComponent,
    RegisterComponent,
    LoginComponent,
    UesrProfilComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    HouseComponent,
    AdminDashboardComponent,
    BedroomComponent,
    BedroomFilterPipe,
    PriceComponent,
    PriceFilterPipe,
    AboutComponent,
    ServiceComponent,
    //AdminDashboardComponent,
    //ColorsDashboardComponent,
    //ColorEditComponent,
    ///BrandsDashboardComponent,
    //BrandEditComponent,
    // CarsDashboardComponent,
    // HomeComponent,
    //UserComponent,
    ///UsereditComponent,


  ],
  imports: [

    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,  //add shode baraye form module
    BrowserAnimationsModule,

    //NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    }),
    DxLoadIndicatorModule,
    DxDataGridModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}






