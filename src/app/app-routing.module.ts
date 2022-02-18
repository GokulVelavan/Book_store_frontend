import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './Components/books/books.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { QuickViewComponent } from './Components/quick-view/quick-view.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
{path: '',redirectTo: '/signup', pathMatch: 'full'},
{path:"signup",component:SignupComponent},
{path:"forgetpassword",component:ForgetPasswordComponent},
{path:"resetPassword/:token",component:ResetPasswordComponent},
{path:"Home",component:HomeComponent,
children:[
  {path:'', redirectTo:"/Home/books", pathMatch:'full' },
{path:"books",component:BooksComponent},
{path:"view",component:QuickViewComponent},

]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
