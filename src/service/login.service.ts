import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userslist = 'http://localhost:3000/users'; // URL to mock backend

  constructor(private http: HttpClient) {}

  // Function to check user credentials
  login(username: string, password: string): Observable<any[]> {
    return this.http.get<any[]>(this.userslist).pipe(
      catchError((error) => {
        throw new Error('Login error: ' + error.message);
      })
    );
  }
}
