import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { ForgetpwComponent } from './forgetpw/forgetpw.component';


const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistreComponent },
  { path: 'resetpw', component: ForgetpwComponent },
  { path: 'home/:nom', loadChildren: "./signedin.module#SignedInModule" }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
