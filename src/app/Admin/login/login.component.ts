import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes, Router } from '@angular/router';
import { LoginService } from '../../../service/login.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // loginObj:any{
  //   username:"",
  //   password:""
  // }

    username: string = '';
    password: string = '';
    errorMessage: string = '';

    constructor(private loginService: LoginService, private router: Router) {}
  // constructor(private router:Router){}
  onregbtn(){
    this.router.navigateByUrl('/signup')
  }
  onLogin(){
    this.loginService.login(this.username, this.password).subscribe(
      (users) => {
        const user = users.find(
          (u) => u.username === this.username && u.password === this.password
        );

        if (user) {
          // On successful login, redirect to dashboard or another page
          this.router.navigate(['/products']);
          alert('Login Successfull');
        } else {
          alert('Invalid username or password');
        }
      },
      (error) => {
        console.error('Error occurred:', error);
        this.errorMessage = 'An error occurred, please try again later';
      }
    );
  }
  //   if (this.loginObj.username == "admin" && this.loginObj.password == "12345"){
  //     this.router.navigateByUrl('/products')

  //   }
  //   else{
  //     alert("Wrong Credentials")
  //   }
  // }
      
}


