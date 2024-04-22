import { Component } from '@angular/core';
import { Header2Component } from '../header2/header2.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-drums',
  standalone: true,
  imports: [Header2Component, FooterComponent],
  templateUrl: './drums.component.html',
  styleUrl: './drums.component.css'
})
export class DrumsComponent {

}
