import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HighlightsComponent, HttpClientModule, RouterModule, FormsModule],
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
