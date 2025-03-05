import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterService } from '../../../service/register.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
username:string="";
name:string="";
city:string="";
email:string="";
password:string="";

constructor(private registerservice: RegisterService, private router: Router) {}
signUp(){
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.registerservice.register(userData).subscribe(
      (response) => {
        // Handle successful registration
        alert("Registration SuccessFull !!!")
        this.router.navigate(['/login']); 
      }
    );
  }
}
