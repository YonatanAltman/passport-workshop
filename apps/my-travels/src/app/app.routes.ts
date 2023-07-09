import {Route} from '@angular/router';
import {LoginFormComponent} from "./login-form/login-form.component";
import {HomeComponent} from "./home/home.component";

export const appRoutes: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginFormComponent},
];
