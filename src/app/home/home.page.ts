import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../(services)/auth.service';
import { UserService } from '../(services)/user.service';
import { SearchService } from '../(services)/search.service';
import { Subscription, debounceTime, distinctUntilChanged, Subject } from 'rxjs';

interface UserData {
  users_id: string;
  user_name: string;
  user_logo: string;
}

interface SearchResult {
  id: string;
  title: string;
  category: string;
  image: string;
  price: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: false
})
export class HomePage implements OnInit, OnDestroy {
  userID: string | null = null;
  userName: string = 'Guest';
  userProfilePic: string = '';
  selectedIcon: string = 'home';
  private authSubscription: Subscription | undefined;
  private baseUrl = 'https://motorscube.com/user-app/';

  // Search related properties
  searchQuery: string = '';
  searchResults: SearchResult[] = [];
  showResults: boolean = false;
  isLoading: boolean = false;
  private searchSubject = new Subject<string>();

  constructor(
    private router: Router, 
    private authService: AuthService,
    private userService: UserService,
    private searchService: SearchService
  ) {
    // Setup search debounce
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(query => {
      if (query.trim()) {
        this.performSearch(query);
      } else {
        this.searchResults = [];
        this.showResults = false;
      }
    });
  }

  ngOnInit(): void {
    // Subscribe to user ID changes
    this.authSubscription = this.authService.userID$.subscribe(userID => {
      this.userID = userID || localStorage.getItem('userId');
      if (this.userID) {
        this.fetchUserData();
      } else {
        this.userName = 'Guest';
        this.userProfilePic = '';
      }
    });
  }

  fetchUserData() {
    this.userService.getUserBsnData().subscribe({
      next: (data: any[]) => {
        console.log('Raw user data:', data);
        const userData = data.filter(item => item.users_id === this.userID);
        console.log('Filtered user data:', userData);
        if (userData.length > 0) {
          const user = userData[0];
          console.log('User profile data:', user);
          this.userName = user.user_name || 'User';
          // Handle profile picture URL
          if (user.user_logo) {
            // If the URL is relative, add the base URL
            this.userProfilePic =  user.image_url1
            ;
          } else {
            this.userProfilePic = '';
          }
          console.log('Profile picture URL:', this.userProfilePic);
        }
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      }
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

  navigateToCarHome(): void {
    this.router.navigate(['/car-home']);
  }

  navigateToBikeHome(): void {
    this.router.navigate(['/bike-home']);
  }

  navigateToCommercialVehiclesHome(): void {
    this.router.navigate(['/commercial-vehicles-home']);
  }

  navigateToMachineryHome(): void {
    this.router.navigate(['/machinery-home']);
  }

  navigateToIndustrialPlantHome(): void {
    this.router.navigate(['/industrial-plant-home']);
  }

  navigateToAccessoriesHome(): void {
    this.router.navigate(['/accessories-home']);
  }

  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 18) return 'afternoon';
    return 'evening';
  }

  // Search methods
  onSearchInput(event: any): void {
    const query = event.target.value;
    this.searchQuery = query;
    this.searchSubject.next(query);
  }

  performSearch(query: string): void {
    this.isLoading = true;
    this.searchService.searchVehicles(query).subscribe({
      next: (results) => {
        this.searchResults = results;
        this.showResults = true;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Search error:', error);
        this.isLoading = false;
        this.searchResults = [];
      }
    });
  }

  onSearchResultClick(result: SearchResult): void {
    // Navigate to the appropriate category page with the result ID
    const categoryRoute = this.getCategoryRoute(result.category);
    this.router.navigate([categoryRoute, result.id]);
    this.showResults = false;
  }

  private getCategoryRoute(category: string): string {
    switch (category.toLowerCase()) {
      case 'cars': return '/car-home';
      case 'bikes': return '/bike-home';
      case 'commercial vehicles': return '/commercial-vehicles-home';
      case 'machinery': return '/machinery-home';
      case 'industrial plant': return '/industrial-plant-home';
      case 'accessories': return '/accessories-home';
      default: return '/home';
    }
  }
}
