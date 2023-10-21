import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';

const routes: Routes = [
  {path : "login", component : LoginComponent },
  {path : "forget-password", component : ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
