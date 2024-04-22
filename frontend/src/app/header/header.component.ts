import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { LoginComponent } from '../login/login.component';
import { routes } from '../app.routes';
import { HighlightsComponent } from '../highlights/highlights.component';
import { Header2Component } from '../header2/header2.component';
import { CategoriesComponent } from '../categories/categories.component';
import { CartComponent } from '../cart/cart.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule, 
    RouterOutlet, 
    LoginComponent,
    HighlightsComponent,
    CategoriesComponent,
    CartComponent,
    ContactsComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
