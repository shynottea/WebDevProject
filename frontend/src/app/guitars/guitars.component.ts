import { Component } from '@angular/core';
import { Header2Component } from '../header2/header2.component';
import { FooterComponent } from '../footer/footer.component';
import { Product } from '../models';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BackendService } from '../backend.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-guitars',
  standalone: true,
  imports: [Header2Component, FooterComponent, RouterModule, HttpClientModule, FormsModule, CommonModule, SearchPipe],
  templateUrl: './guitars.component.html',
  styleUrl: './guitars.component.css'
})
export class GuitarsComponent {
  word:any;
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
