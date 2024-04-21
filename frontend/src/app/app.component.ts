import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HighlightsComponent } from './highlights/highlights.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HighlightsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
changeImage($event: MouseEvent) {
throw new Error('Method not implemented.');
}
  title = 'music_store';
  url: any;
}
