import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { HeaderComponent } from './Components/header/header.component';
import { BooksComponent } from './Components/books/books.component';
import { QuickViewComponent } from './Components/quick-view/quick-view.component';
import { CartComponent } from './Components/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    HeaderComponent,
    BooksComponent,
    QuickViewComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,HttpClientModule,
    ReactiveFormsModule,FlexLayoutModule,MatFormFieldModule,MatInputModule,MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
