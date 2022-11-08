import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent} from './user/register/register.component';
import { UserloginComponent} from './user/userlogin/userlogin.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AdminloginComponent} from './admin/adminlogin/adminlogin.component';
import { NavbarComponent} from './user/navbar/navbar.component';

import { HomeComponent } from './user/home/home.component';
import { SearchComponent } from './search/search.component';

import { HeaderComponent } from './header/header.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { crudComponent } from './crud/crud.component';
import { PaymentComponent } from './payment/payment.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DefaultComponent} from './default/default.component'
const routes: Routes = [
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'payment',component:PaymentComponent},
  
  {path:'cart-page', component: CartPageComponent},
  { path :'register', component: RegisterComponent},
  { path :'crud', component:crudComponent},
  { path :'userlogin', component: UserloginComponent},
  { path :'home', component: HomeComponent},
  { path :'adminlogin', component: AdminloginComponent},
  { path :'transaction', component: TransactionComponent},
 
  { path :'adminregister', component: AdminregisterComponent},
  { path :'cart', component: CartPageComponent},
  { path :'', component: DefaultComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
