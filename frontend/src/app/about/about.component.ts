import { Component } from '@angular/core';
import { Header2Component } from '../header2/header2.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Header2Component],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
