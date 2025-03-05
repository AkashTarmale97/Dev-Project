import { Routes } from '@angular/router';
import { LoginComponent } from './Admin/login/login.component';
import { SignupComponent } from './Admin/signup/signup.component';
import { ProductComponent } from './Admin/product/product.component';
import { LayoutComponent } from './Admin/layout/layout.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"login",
        pathMatch:"full"
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"signup",
        component:SignupComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path:'products',
                component:ProductComponent
            }
        ]
    }
];
