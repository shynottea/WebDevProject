import { Component, OnInit } from '@angular/core';
import { Signup } from '../models/signup.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  isSignDivVisible: boolean = true;
  signUpObj: Signup = new Signup();
  email_validation_msg: string = "";
  password_validation_msg: string = "";
  validation_messages: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ){
    this.validation_messages = {
      email : [
        { type : 'required', message : 'Username is required' },
        { type : 'minlength', message : 'Username must be at least 6 characters long'},
        { type : 'maxlength', message : 'Username cannot be more than 15 characters long'}
      ],
      password : [
        { type : 'required', message : 'Password is required' },
        { type : 'minlength', message : 'Password must be at least 6 characters long' },
        { type : 'maxlength', message : 'Password cannot be more than 30 characters long' },
        { type : 'pattern', message : 'Please enter a valid password' }
      ]
    }

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.pattern(/^[a-zA-Z\d#@!~%^&*]{6,30}$/),
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.required
      ]))
    });
  }

  onLogin() {
    this.showFormValidationMessage();

    if(this.loginForm.valid) {
      this.authService.authenticate(
        this.loginForm.get('email')?.value, 
        this.loginForm.get('password')?.value)
        .subscribe(
          (response) => {
            localStorage.setItem('currentUser', JSON.stringify(response));
            this.authService.currentUserSubject.next(response);
            //alert('Login successfully!');
            Swal.fire({
              title: "Login Successfully!",
              width: 600,
              padding: "3em",
              color: "#716add",
              backdrop: `
                rgba(0,0,123,0.4)
                url("https://media.tenor.com/Mwzug9zxYh0AAAAi/nyan-cat-every-nyan.gif")
                left top
                no-repeat
              `,
              
            });

          },
          (error) => {
            console.log('onLogin | error : ', error);
            Swal.fire({
              text: 'Any fool can use a computer',
              customClass: {
                  confirmButton: 'btn btn-primary px-4',
              },
              buttonsStyling: false,
          });
            //alert(error.error.message);
            Swal.fire({
              icon: "error",
              text: error.error.message,
            });
          }
        );
    }
  }
  
  showFormValidationMessage() {

    this.email_validation_msg = "";
    this.password_validation_msg = "";
    //username
    this.validation_messages.email.forEach((validation : any) => {
      if(this.loginForm.get('email')?.hasError(validation.type)) {
        this.email_validation_msg = validation.message;
      }
    });
    //password
    this.validation_messages.password.forEach((validation : any) => {
      if(this.loginForm.get('password')?.hasError(validation.type)) {
        this.password_validation_msg = validation.message;
      }
    });

  }

  onRegister() {
    
  }

}
