import { Component } from '@angular/core';
import { Header2Component } from '../header2/header2.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Header2Component, FooterComponent,
    RouterModule, 
    RouterOutlet,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
