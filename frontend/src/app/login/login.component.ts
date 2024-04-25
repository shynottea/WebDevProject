import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header2Component } from '../header2/header2.component';
import { FooterComponent } from '../footer/footer.component';
import { BackendService } from '../backend.service';
import { Token} from '../models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule, 
    RouterOutlet,
    Header2Component,
    FooterComponent,
    FormsModule,
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  logged: boolean = false;
  username: string = "";
  password: string = "";

  constructor(private backendService: BackendService) {
  }

    ngOnInit() {
      const access = localStorage.getItem("access");
      if (access) {
        this.logged = true;
      }
    }

    login() {
    this.backendService
      .login(this.username, this.password)
      .subscribe((data) => {
        this.logged = true;
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
      })
    }

    logout() {
      this.logged = false;
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
    }


}