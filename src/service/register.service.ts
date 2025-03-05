import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private userslist = 'http://localhost:3000/users'; // URL to mock backend
  
    constructor(private http: HttpClient) {}
  
    // Function to check user credentials
    register(userData: any): Observable<any> {
      return this.http.post<any>(this.userslist, userData);  // POST request to add user to db.json
    }
}
