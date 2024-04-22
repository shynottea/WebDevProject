import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: HeaderComponent},
    {path: 'login', component: LoginComponent},
    {path: 'about', component: AboutComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: '**', component: NotFoundComponent},

];
