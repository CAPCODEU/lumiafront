import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';
import {AuthService} from "../Authentication/auth-service";

@Component({
    selector: 'app-auth-form',
    imports: [
        FormsModule,
        NgIf
    ],
    templateUrl: './authentification-form.html',
    styleUrl: './authentification-form.scss'
})
export class AuthentificationForm {

    router = inject(Router);
    authService = inject(AuthService);
    authToken: string = '';
    isAuthenticated: boolean = false;

    email: string = '';
    password: string = '';
    errorMessage: string = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.authService.postLogin(this.email, this.password).subscribe({
            next: (response: any) => {
                console.log('Login successful:');
                this.authToken = response.token;
                this.isAuthenticated = true;
                localStorage.setItem('authStatus', 'true');
                localStorage.setItem('authToken', this.authToken);
                this.router.navigate(['/lumia']);
            },
            error: (error: any) => {
                this.errorMessage = error.error;
                this.isAuthenticated = false;
                localStorage.setItem('authStatus', 'false');
                console.error('Login failed:', error);
            }
        });
    }
}
