import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header2Component } from '../header2/header2.component';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [Header2Component, FooterComponent,
    RouterModule, 
    RouterOutlet,],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {

}
