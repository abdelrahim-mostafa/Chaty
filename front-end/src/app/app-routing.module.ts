import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'home' , component : HomeComponent},
  { path : 'login' , component : LoginComponent },
  { path : 'signup' , component : SignupComponent},
  { path : 'profile' , component : ProfileComponent , canActivate : [AuthGuard]},
  { path : 'message' , loadChildren : './message/message.module#MessageModule' , canLoad : [AuthGuard]},
  { path : '**' , component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
