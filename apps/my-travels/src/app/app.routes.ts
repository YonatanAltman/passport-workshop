import {Route} from '@angular/router';
import {LoginFormComponent} from "./login-form/login-form.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {UserTableComponent} from "./user-table/user-table.component";
import {CountriesTableComponent} from "./countries-table/countries-table.component";

export const appRoutes: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'users', component: UserTableComponent},
  {path: 'countries', component: CountriesTableComponent},
];
