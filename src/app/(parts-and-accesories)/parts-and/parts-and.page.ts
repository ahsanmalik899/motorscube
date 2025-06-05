import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PartsAndAccesoriesService } from 'src/app/(services)/parts-and-accesories.service';

@Component({
  selector: 'app-parts-and',
  templateUrl: './parts-and.page.html',
  styleUrls: ['./parts-and.page.scss'],
  standalone: false
})
export class PartsAndPage implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchTerm: string = '';
  selectedCategory: string | null = null;
  sortBy: string = 'all';
  priceSort: string = 'newest';
  categories: string[] = [];
  loading: boolean = true;
  error: string | null = null;
  searchSuggestions: string[] = [];
  showSuggestions: boolean = false;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private http: HttpClient,
    private partsandaccesorys: PartsAndAccesoriesService,
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    this.error = null;
  
    this.partsandaccesorys.getallproducts().subscribe({
      next: (response: any) => {
        if (response.success) {
          this.products = response.products.filter((product: { post_status: string }) => product.post_status === 'Active');
          this.filteredProducts = [...this.products];
          this.extractCategories();
          this.loading = false;
        } else {
          this.error = response.message || 'Failed to load products';
          this.loading = false;
        }
      },
      error: (error) => {
        console.error('Error loading products:', error);
        this.error = 'Failed to load products. Please try again later.';
        this.loading = false;
      }
    });
  }
  

  extractCategories() {
    const categorySet = new Set<string>();
    this.products.forEach(product => {
      if (product.category) {
        categorySet.add(product.category);
      }
    });
    this.categories = Array.from(categorySet);
  }

  filterProducts() {
    let filtered = [...this.products];

    // Filter active products only
    filtered = filtered.filter(product => product.post_status === 'Active');

    // Apply search filter
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(product => {
        const name = this.getProductName(product).toLowerCase();
        const category = this.getProductCategory(product).toLowerCase();
        const description = (product.description || '').toLowerCase();
        const make = (product.make || '').toLowerCase();
        const model = (product.model || '').toLowerCase();
        const version = (product.version || '').toLowerCase();
        const location = (product.location || '').toLowerCase();

        return name.includes(searchLower) ||
               category.includes(searchLower) ||
               description.includes(searchLower) ||
               make.includes(searchLower) ||
               model.includes(searchLower) ||
               version.includes(searchLower) ||
               location.includes(searchLower);
      });
    }

    // Apply category filter
    if (this.selectedCategory) {
      filtered = filtered.filter(product => 
        product.category === this.selectedCategory
      );
    }

    // Apply type filter
    if (this.sortBy !== 'all') {
      filtered = filtered.filter(product => 
        product.ad_for.toLowerCase().includes(this.sortBy.toLowerCase())
      );
    }

    // Apply price sort
    switch (this.priceSort) {
      case 'price-low':
        filtered.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime());
        break;
    }

    this.filteredProducts = filtered;
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value;
    this.updateSearchSuggestions();
    this.filterProducts();
  }

  updateSearchSuggestions() {
    if (!this.searchTerm.trim()) {
      this.searchSuggestions = [];
      this.showSuggestions = false;
      return;
    }

    const searchLower = this.searchTerm.toLowerCase().trim();
    const suggestions = new Set<string>();

    this.products.forEach(product => {
      // Add product name suggestions
      const name = this.getProductName(product).toLowerCase();
      if (name.includes(searchLower)) {
        suggestions.add(this.getProductName(product));
      }

      // Add category suggestions
      const category = this.getProductCategory(product).toLowerCase();
      if (category.includes(searchLower)) {
        suggestions.add(this.getProductCategory(product));
      }

      // Add make/model suggestions
      if (product.make?.toLowerCase().includes(searchLower)) {
        suggestions.add(product.make);
      }
      if (product.model?.toLowerCase().includes(searchLower)) {
        suggestions.add(product.model);
      }
    });

    this.searchSuggestions = Array.from(suggestions).slice(0, 5);
    this.showSuggestions = this.searchSuggestions.length > 0;
  }

  selectSuggestion(suggestion: string) {
    this.searchTerm = suggestion;
    this.showSuggestions = false;
    this.filterProducts();
  }

  onSearchClear() {
    this.searchTerm = '';
    this.searchSuggestions = [];
    this.showSuggestions = false;
    this.filterProducts();
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedCategory = null;
    this.sortBy = 'all';
    this.priceSort = 'newest';
    this.filterProducts();
  }

  getProductName(product: any): string {
    return product.car_item_name || 
           product.bikeitem_name || 
           product.item_name || 
           product.access_name || 
           'Unnamed Product';
  }

  getProductCategory(product: any): string {
    return product.car_category || 
           product.bikeitem_category || 
           product.category || 
           'Uncategorized';
  }

  getProductCondition(product: any): string {
    return product.car_condition || 
           product.bike_condition || 
           product.vehicle_condition || 
           product.access_condition || 
           product.item_condition || 
           'Unknown';
  }

  getImagePath(product: any): string {
    if (product.image_1 && product.image_1.startsWith('http')) {
      return product.image_1;
    }
    return product.image_1 || 'assets/placeholder.svg';
  }

  getAdType(product: any): string {
    const adType = product.ad_type?.toLowerCase() || 'general';
    switch (adType) {
      case 'supreme':
        return 'Supreme';
      case 'hotspot':
        return 'Hotspot';
      default:
        return 'General';
    }
  }

  getAdTypeClass(product: any): string {
    const adType = product.ad_type?.toLowerCase() || 'general';
    switch (adType) {
      case 'supreme':
        return 'supreme';
      case 'hotspot':
        return 'hotspot';
      default:
        return 'general';
    }
  }

  viewProductDetails(product: any) {
    // Determine product type based on the properties present
    let type = 'car';
    if (product.ad_for==='Bike Accessory') type = 'bike';
    else if (product.ad_for==='Commercial Accessory') type = 'commercial';
    else if (product.ad_for==='Machinery Accessory') type = 'machinery';
    else if (product.ad_for==='Plant Accessory') type = 'plant';

    // Get the appropriate ID based on type
    const id = product.product_id || 
               product.car_ad_accessories_id || 
               product.bike_ad_accessories_id || 
               product.commercial_vehicle_access_ad_sale_id || 
               product.machinery_access_ad_sale_id || 
               product.plant_access_ad_sale_id;

    if (!id) {
      console.error('No valid ID found for product:', product);
      return;
    }

    // Navigate to product details page with type and id parameters
    this.router.navigate(['/product-detail', type, id.toString()]);
  }

  contactSeller(product: any) {
    // Implement contact seller functionality
    console.log('Contact seller for product:', product);
  }

  addToCart(product: any) {
    // Implement add to cart functionality
    console.log('Add to cart:', product);
  }

  back() {
    this.navCtrl.back();
  }
}
