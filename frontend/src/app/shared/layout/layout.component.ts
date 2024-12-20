import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  userName : any;
  constructor(
    private authService: AuthService, 
    private router: Router
  ) {
    this.userName = localStorage.getItem("userName");
  }
  
  logout(): void {
    // Call the logout method from AuthService
    // this.authService.logout();
    localStorage.removeItem("userName");
    localStorage.removeItem("authToken");

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
