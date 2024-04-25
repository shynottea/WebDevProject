import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuitarsComponent } from './guitars/guitars.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DjEquipComponent } from './dj-equip/dj-equip.component';
import { PianosComponent } from './pianos/pianos.component';
import { StringsComponent } from './strings/strings.component';
import { DrumsComponent } from './drums/drums.component';
import { WindsComponent } from './winds/winds.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: '', component: HeaderComponent},
    {path: 'login', component: LoginComponent},
    {path: 'about', component: AboutComponent},
    {path: 'cart', component: CartComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'categories/:id/Guitars', component: GuitarsComponent},
    {path: 'categories/:id/Keys', component: PianosComponent},
    {path: 'categories/:id/Strings', component: StringsComponent},
    {path: 'categories/:id/Drums', component: DrumsComponent},
    {path: 'categories/:id/Winds', component: WindsComponent},
    {path: 'categories/:id/Dj Equip', component: DjEquipComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: '**', component: NotFoundComponent},

];
