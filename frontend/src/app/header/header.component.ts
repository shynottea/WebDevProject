import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { LoginComponent } from '../login/login.component';
import { routes } from '../app.routes';
import { HighlightsComponent } from '../highlights/highlights.component';
import { Header2Component } from '../header2/header2.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule, 
    RouterOutlet, 
    LoginComponent,
  HighlightsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
