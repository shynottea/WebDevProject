import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header2Component } from '../header2/header2.component';
import { FooterComponent } from '../footer/footer.component';
import { Category } from '../models';
import { BackendService } from '../backend.service';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, Header2Component, FooterComponent,
    RouterModule, 
    RouterOutlet, 
    RouterLink,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: Category[] = [];
  loaded: boolean;
  constructor(private backendservice: BackendService){
    this.loaded = false;

  }

  ngOnInit(): void {
    this.getCategories()
    
  }

  getCategories(): void{
    this.loaded = false;
    this.backendservice.getCategories().subscribe((data) => {
      this.categories = data;
      this.loaded = true;

    });
  }


}
