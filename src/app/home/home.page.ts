import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../(services)/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: false
})
export class HomePage implements OnInit, OnDestroy {
  userID: string | null = null;
  selectedIcon: string = 'home';
  private authSubscription: Subscription | undefined;

  constructor(private router: Router,private authService: AuthService,) { 
    
  }
     

  ngOnInit(): void {
    // Subscribe to user ID changes
    this.authSubscription = this.authService.userID$.subscribe(userID => {
      this.userID = userID || localStorage.getItem('userId');
    });
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  navigateToMenu(): void {
    const route = this.userID ? '/main-menu-after-login' : '/main-menu';
    this.router.navigate([route]);
  }

  selectIcon(icon: 'home' | 'message' | 'profile'): void {
    this.selectedIcon = icon;
    
    // Add navigation based on icon selection
    switch (icon) {
      case 'home':
        // Already on home page
        break;
      case 'message':
        this.router.navigate(['/messages']);
        break;
      case 'profile':
        this.router.navigate(['/profile']);
        break;
    }
  }
}
