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
    categories: Array<{
      label: string;
      img: string;
      type: string;
      description: string;
      action: () => void;
    }> | undefined;
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
    activeTab = 'home'; // Set the default active tab
  unreadMessages = 3; // Example unread message count
  private searchSubject = new Subject<string>();


initializeCategories() {
this.categories = [
  {
    label: 'Cars',
    img: 'assets/extra/blue-car.png',
    type: 'car-bg',
    description: 'Discover a wide range of new & used cars  buy, sell, or hire with ease!',
    action: () => this.navigateToCarHome()
  },
  {
    label: 'Bikes',
    img: 'assets/Bikesection/bikecardpic.png',
    type: 'bike-bg',
    description: 'Explore bikes & scooters for every ride  new, used, or rental options.',
    action: () => this.navigateToBikeHome()
  },
  {
    label: 'Commercial Vehicle',
    img: 'assets/extra/truck.png',
    type: 'commercial-bg',
    description: 'Find trucks and commercial vehicles for sale or hire  all in one place.',
    action: () => this.navigateToCommercialVehiclesHome()
  },
  {
    label: 'Machinery',
    img: 'assets/extra/loader.png',
    type: 'machinery-bg',
    description: 'Heavy machinery for sale or hire  trusted deals for every project.',
    action: () => this.navigateToMachineryHome()
  },
  {
    label: 'Industrial Plant',
    img: 'assets/extra/engine.png',
    type: 'plant-bg',
    description: 'Buy, sell, or rent industrial plants and equipment with confidence.',
    action: () => this.navigateToIndustrialPlantHome()
  },
  {
    label: 'Accessories',
    img: 'assets/Landing page/partandaccesories.png',
    type: 'parts-bg',
    description: 'Find the best tools, parts & accessories  new, used, and hire available.',
    action: () => this.navigateToAccessoriesHome()
  }
];

}


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

  navigateToHome() {
    this.activeTab = 'home';
    this.router.navigate(['/home']); // Update with your home route
  }

  navigateToChat() {
    this.activeTab = 'chat';
    this.router.navigate(['/chat']); // Update with your chat route
  }

  navigateToProfile() {
    this.activeTab = 'profile';
    this.router.navigate(['/profile']); // Update with your profile route
  }
  navigateToCategory(route: string) {
    this.router.navigateByUrl(route);
  }
  ngOnInit(): void {
    // Subscribe to user ID changes
      this.initializeCategories(); 
    this.authSubscription = this.authService.userID$.subscribe(userID => {
      console.log('Auth service userID changed:', userID);
      this.userID = userID || localStorage.getItem('userId');
      
      if (this.userID) {
        // Get cached data first
        const cachedName = localStorage.getItem('userName');
        const cachedPic = localStorage.getItem('userProfilePic');
        
        if (cachedName && cachedPic) {
          this.userName = cachedName;
          this.userProfilePic = cachedPic;
        }
        
        // Then fetch fresh data
        this.fetchUserData();
      } else {
        this.userName = 'Guest';
        this.userProfilePic = '';
      }
    });
  }

  fetchUserData() {
    if (!this.userID) return;

    console.log('Fetching user data for ID:', this.userID);
    
    this.userService.getUserBsnData().subscribe({
      next: (data: any[]) => {
        console.log('Raw user data:', data);
        const userData = data.find(item => item.users_id === this.userID);
        console.log('Found user data:', userData);
        
        if (userData) {
          // Update user data
          this.userName = userData.user_name || 'User';
          this.userProfilePic = userData.image_url1 || '';
          
          // Store in localStorage for persistence
          localStorage.setItem('userName', this.userName);
          localStorage.setItem('userProfilePic', this.userProfilePic);
          
          console.log('Updated user data:', {
            userName: this.userName,
            userProfilePic: this.userProfilePic
          });
        } else {
          console.error('User not found in data');
        }
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
        // On error, try to use cached data
        const cachedName = localStorage.getItem('userName');
        const cachedPic = localStorage.getItem('userProfilePic');
        
        if (cachedName && cachedPic) {
          this.userName = cachedName;
          this.userProfilePic = cachedPic;
        }
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
    this.router.navigate(['/parts-and']);
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
