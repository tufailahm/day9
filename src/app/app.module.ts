import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { WeatherComponent } from './weather/weather.component';
import { CityComponent } from './city/city.component';
import { AddBorderDirective } from './add-border.directive'

@NgModule({
  declarations: [
    AppComponent,WelcomeComponent, EmployeeComponent, EmployeeDetailComponent, ProductListComponent, ProductDetailsComponent, AddProductComponent, ReverseStringPipe, WeatherComponent, CityComponent, AddBorderDirective
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
