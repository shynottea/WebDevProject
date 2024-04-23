import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header2Component } from '../header2/header2.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [Header2Component, FooterComponent,
    RouterModule, 
    RouterOutlet,],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
