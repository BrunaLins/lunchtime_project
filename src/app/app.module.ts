import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ClientOrdersComponent } from './pages/client-orders/client-orders.component';
import { OrdersManagementComponent } from './pages/orders-management/orders-management.component';
import { ClientsManagementComponent } from './pages/clients-management/clients-management.component';
import { MenusManagementComponent } from './pages/menus-management/menus-management.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';     
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { UserAccountComponent } from './pages/user-account/user-account.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ClientOrdersComponent,
    OrdersManagementComponent,
    ClientsManagementComponent,
    MenusManagementComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DynamicDialogModule

  ],
  entryComponents: [
    LoginComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
