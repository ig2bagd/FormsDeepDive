import { Component } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { LoginTemplateComponent } from './auth/logintemplate/logintemplate.component';
import { SignupComponent } from "./auth/signup/signup.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [LoginComponent, LoginTemplateComponent, SignupComponent]
})
export class AppComponent {}
