import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './user/register/register.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './user/home/home.component';
import { SearchComponent } from './search/search.component';

import { HeaderComponent } from './header/header.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApiService } from './shared/api.service';
import { Food } from './food';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { ProductComponent } from './product/product.component';
import { crudComponent } from './crud/crud.component';
import { CartItem } from './shared/models/CartItem';
import { PaymentComponent } from './payment/payment.component';
import { DefaultComponent } from './default/default.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserloginComponent,
    HomeComponent,
    AdminloginComponent,
    NavbarComponent,
    CartPageComponent,  
    SearchComponent,
    HeaderComponent,
   
    CartPageComponent,
    NotFoundComponent,
    AdminregisterComponent,
    ProductComponent,
    crudComponent,
    PaymentComponent,
    DefaultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   
   
  ],
  providers: [
   
    BrowserAnimationsModule,
    MatCardModule,
    ApiService,
    
    
   
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
