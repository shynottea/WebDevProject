import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BackendService } from '../backend.service';
import { Header2Component } from '../header2/header2.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../models';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-strings',
  standalone: true,
  imports: [Header2Component, FooterComponent, RouterModule, HttpClientModule, FormsModule, CommonModule, SearchPipe],
  templateUrl: './strings.component.html',
  styleUrl: './strings.component.css'
})
export class StringsComponent {
  word:any;
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
