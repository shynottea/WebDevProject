import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {
  url:string = "../assets/casio.webp";
  changeImage(event:any){
    this.url = event.target.src;
  }

}
