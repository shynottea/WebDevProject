import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { Header2Component } from '../header2/header2.component';
import { BackendService } from '../backend.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [Header2Component, FooterComponent,
    RouterModule, 
    RouterOutlet, FormsModule, CommonModule],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {
   // @ts-ignore
   products: Product[] = [];
   // @ts-ignore
   name: string;
   constructor(private route: ActivatedRoute,
               private backendservice: BackendService) {
   }
 
   ngOnInit(): void {
     this.getCategoryProducts();
   }
 
   getCategoryProducts(): void {
     this.route.paramMap.subscribe((params) => {
       // @ts-ignore
       const id = +params.get('id');
       this.backendservice.getCategoryProducts(id).subscribe((data) => {
         this.products = data;
       });
     });
   }
}
