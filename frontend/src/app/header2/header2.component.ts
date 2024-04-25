import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { LoginComponent } from '../login/login.component';
import { routes } from '../app.routes';
import { HighlightsComponent } from '../highlights/highlights.component';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [
    RouterModule, 
    RouterOutlet, 
  ],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})
export class Header2Component {

}
