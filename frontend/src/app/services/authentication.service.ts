import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUserSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public currentUser: Observable<any> = new Observable();
  
  constructor(
    private http: HttpClient
  ) { }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  /**
   * Sample user
   * username: kminchelle
   * password: 0lelplR
   * @param username 
   * @param password 
   * @returns 
   */
  authenticate(username: string, password: string) : Observable<any>{
    return this.http.post("https://dummyjson.com/auth/login",
      {
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      });
  }

}
