import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

interface BaseProduct {
  post_status: string;
  created_date: string;
  price: number;
  description: string;
  image_1: string;
  store_id: string;
  user_id: string;
  ad_for: string;
}

interface CarProduct extends BaseProduct {
  type: 'car';
  car_ad_accessories_id: number;
  car_item_name: string;
  car_condition: string;
  car_location: string;
  car_category: string;
  car_sub_catagory: string;
  car_make: string;
  car_model: string;
  car_version: string;
  car_ad_privateortrade: string;
}

interface BikeProduct extends BaseProduct {
  type: 'bike';
  bike_ad_accessories_id: number;
  bikeitem_name: string;
  bike_condition: string;
  bike_ad_location: string;
  bikeitem_category: string;
  bikeitem_subcategory: string;
  bike_ad_make: string;
  bike_ad_model: string;
  bike_version: string;
  bike_ad_privateortrade: string;
}

interface CommercialVehicleProduct extends BaseProduct {
  type: 'commercial';
  commercial_vehicle_access_ad_sale_id: number;
  item_name: string;
  item_for: string;
  vehicle_condition: string;
  vehicle_city: string;
  category: string;
  sub_category: string;
  make: string;
  model: string;
  version: string;
  vehicle_private_trader: string;
}

interface MachineryProduct extends BaseProduct {
  type: 'machinery';
  machinery_access_ad_sale_id: number;
  access_name: string;
  access_type: string;
  access_other_type: string;
  access_subtype: string;
  access_category: string;
  access_condition: string;
  access_hourused: number;
  access_weight: number;
  access_city: string;
  access_country: string;
  access_make: string;
  access_model: string;
  access_version: string;
  access_privateortrade: string;
}

interface PlantProduct extends BaseProduct {
  type: 'plant';
  plant_access_ad_sale_id: number;
  item_name: string;
  item_condition: string;
  item_for: string;
  item_other_sector: string;
  sub_sector: string;
  category: string;
  hour_used: number;
  gross_weight: number;
  city: string;
  country: string;
  seller_type: string;
}

type Product = CarProduct | BikeProduct | CommercialVehicleProduct | MachineryProduct | PlantProduct;

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.page.html',
  styleUrls: ['./my-products.page.scss'],
  standalone: false,
})
export class MyProductsPage implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: string | null = null;
  storeId: string = '';
  searchTerm: string = '';
  isLoading: boolean = false;
  categories: string[] = [];
  sortBy: string = 'all';
  priceSort: string = 'newest';
  environment = environment; // Make environment available to template

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  showProductOptions = false;

  productTypeButtons = [
    {
      text: 'Car',
      icon: 'car-outline',
      handler: () => this.router.navigate(['/add-car'], { queryParams: { store_id: this.storeId } }),
    },
    {
      text: 'Bike',
      icon: 'bicycle-outline',
      handler: () => this.router.navigate(['/add-bike'], { queryParams: { store_id: this.storeId } }),
    },
    {
      text: 'Commercial Vehicle',
      icon: 'bus-outline',
      handler: () => this.router.navigate(['/add-commercial-vehicle'], { queryParams: { store_id: this.storeId } }),
    },
    {
      text: 'Heavy Machinery',
      icon: 'construct-outline',
      handler: () => this.router.navigate(['/add-machinery'], { queryParams: { store_id: this.storeId } }),
    },
    {
      text: 'Industrial Plant',
      icon: 'business-outline',
      handler: () => this.router.navigate(['/add-plant'], { queryParams: { store_id: this.storeId } }),
    },
    {
      text: 'Cancel',
      role: 'cancel',
      icon: 'close-outline'
    }
  ];

  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      this.storeId = params['storeId'] || '';
      console.log("idt",this.storeId)
      if (this.storeId) {
        this.loadProducts();
      }
    });
  }

  async loadProducts() {
    
    const loading = await this.loadingCtrl.create({
      message: 'Loading products...'
    });
    await loading.present();

    try {
      const formData = new FormData();
      formData.append('store_id', this.storeId);

      const response = await this.http.post<any>(`${environment.apiUrl}get-store-products.php`, formData).toPromise();
   
      if (response.success) {
        
        this.products = response.products.map((product: any) => {
          // Add type based on ad_for field
          if (product.ad_for === 'Car Accessories') {
            return { ...product, type: 'car' } as CarProduct;
          } else if (product.ad_for === 'Bike Accessory') {
            return { ...product, type: 'bike' } as BikeProduct;
          } else if (product.ad_for === 'Commercial Accessory') {
            return { ...product, type: 'commercial' } as CommercialVehicleProduct;
          } else if (product.ad_for === 'Machinery Accessory') {
            return { ...product, type: 'machinery' } as MachineryProduct;
          } else if (product.ad_for === 'Plant Accessory') {
            return { ...product, type: 'plant' } as PlantProduct;
          }
          return product;
        });
        this.filteredProducts = [...this.products];
        this.extractCategories();
        this.filterProducts();
      } else {
        this.presentToast(response.message || 'Failed to load products', 'danger');
      }
    } catch (error) {
      console.error('Error loading products:', error);
      this.presentToast('An error occurred while loading products', 'danger');
    } finally {
      await loading.dismiss();
    }
  }

  extractCategories() {
    const uniqueCategories = new Set<string>();
    
    this.products.forEach(p => {
      let category = '';
      switch (p.type) {
        case 'car': 
          category = p.car_category;
          break;
        case 'bike': 
          category = p.bikeitem_category;
          break;
        case 'commercial': 
          category = p.category;
          break;
        case 'machinery': 
          category = p.access_category;
          break;
        case 'plant': 
          category = p.category;
          break;
      }
      // Normalize category names
      if (category && category.trim() !== '') {
        // Remove any numeric-only categories
        if (!/^\d+$/.test(category)) {
          // Normalize similar categories
          category = category.replace(/\s*\/\s*/g, ' and ')
                           .replace(/\s+/g, ' ')
                           .trim();
          uniqueCategories.add(category);
        }
      }
    });

    this.categories = Array.from(uniqueCategories).sort();
    console.log('Normalized categories:', this.categories);
  }

  filterProducts() {
    console.log('Filtering products with:', {
      searchTerm: this.searchTerm,
      selectedCategory: this.selectedCategory,
      sortBy: this.sortBy,
      priceSort: this.priceSort
    });

    // Start with all products
    let filtered = [...this.products];

    // Apply search filter
    if (this.searchTerm) {
      filtered = filtered.filter(product => {
        const name = this.getProductName(product).toLowerCase();
        const description = product.description.toLowerCase();
        const searchTerm = this.searchTerm.toLowerCase();
        return name.includes(searchTerm) || description.includes(searchTerm);
      });
    }

    // Apply category filter
    if (this.selectedCategory) {
      filtered = filtered.filter(product => {
        const category = this.getProductCategory(product);
        // Normalize the category for comparison
        const normalizedCategory = category.replace(/\s*\/\s*/g, ' and ')
                                        .replace(/\s+/g, ' ')
                                        .trim();
        return normalizedCategory === this.selectedCategory;
      });
    }

    // Apply type filter
    if (this.sortBy !== 'all') {
      filtered = filtered.filter(product => product.type === this.sortBy);
    }

    console.log('Products after filtering:', filtered.length);

    // Apply price sorting
    switch (this.priceSort) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime());
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
    }

    this.filteredProducts = filtered;
    console.log('Final filtered products:', this.filteredProducts.length);
  }

  getProductName(product: Product): string {
    switch (product.type) {
      case 'car': return product.car_item_name;
      case 'bike': return product.bikeitem_name;
      case 'commercial': return product.item_name;
      case 'machinery': return product.access_name;
      case 'plant': return product.item_name;
      default: return '';
    }
  }

  getProductCategory(product: Product): string {
    switch (product.type) {
      case 'car': return product.car_category;
      case 'bike': return product.bikeitem_category;
      case 'commercial': return product.category;
      case 'machinery': return product.access_category;
      case 'plant': return product.category;
      default: return '';
    }
  }

  getProductCondition(product: Product): string {
    switch (product.type) {
      case 'car': return product.car_condition;
      case 'bike': return product.bike_condition;
      case 'commercial': return product.vehicle_condition;
      case 'machinery': return product.access_condition;
      case 'plant': return product.item_condition;
      default: return '';
    }
  }

  getProductId(product: any): string {
    switch (product.type) {
      case 'car':
        return product.car_ad_accessories_id;
      case 'bike':
        return product.bike_ad_accessories_id;
      case 'commercial':
        return product.commercial_vehicle_access_ad_sale_id;
      case 'machinery':
        return product.machinery_access_ad_sale_id;
      case 'plant':
        return product.plant_access_ad_sale_id;
      default:
        return '';
    }
  }

  async deleteProduct(product: Product) {
    const loading = await this.loadingCtrl.create({
      message: 'Deleting product...'
    });
    await loading.present();

    try {
      const formData = new FormData();
      let productId: number;
      let endpoint: string;

      switch (product.type) {
        case 'car':
          productId = product.car_ad_accessories_id;
          endpoint = 'delete-car-product.php';
          break;
        case 'bike':
          productId = product.bike_ad_accessories_id;
          endpoint = 'delete-bike-product.php';
          break;
        case 'commercial':
          productId = product.commercial_vehicle_access_ad_sale_id;
          endpoint = 'delete-commercial-product.php';
          break;
        case 'machinery':
          productId = product.machinery_access_ad_sale_id;
          endpoint = 'delete-machinery-product.php';
          break;
        case 'plant':
          productId = product.plant_access_ad_sale_id;
          endpoint = 'delete-plant-product.php';
          break;
        default:
          throw new Error('Invalid product type');
      }

      formData.append('product_id', productId.toString());

      const response = await this.http.post<any>(`${environment.apiUrl}${endpoint}`, formData).toPromise();
      
      if (response.success) {
        this.presentToast('Product deleted successfully', 'success');
        this.products = this.products.filter(p => {
          switch (p.type) {
            case 'car': return p.car_ad_accessories_id !== productId;
            case 'bike': return p.bike_ad_accessories_id !== productId;
            case 'commercial': return p.commercial_vehicle_access_ad_sale_id !== productId;
            case 'machinery': return p.machinery_access_ad_sale_id !== productId;
            case 'plant': return p.plant_access_ad_sale_id !== productId;
            default: return true;
          }
        });
        this.filterProducts();
      } else {
        this.presentToast(response.message || 'Failed to delete product', 'danger');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      this.presentToast('An error occurred while deleting the product', 'danger');
    } finally {
      await loading.dismiss();
    }
  }

  openProductOptions() {
    this.showProductOptions = true;
  }

  async presentToast(message: string, color: string = 'dark') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position: 'bottom'
    });
    await toast.present();
  }

  getImagePath(product: Product): string {
    const baseProduct = product as BaseProduct;
    if (!baseProduct.image_1) {
      return 'assets/images/placeholder.png';
    }

    switch (product.type) {
      case 'car':
        return `car-accessories/${baseProduct.image_1}`;
      case 'bike':
        return `bike-accessories/${baseProduct.image_1}`;
      case 'commercial':
        return `commercial-accessories/${baseProduct.image_1}`;
      case 'machinery':
        return `machinery/${baseProduct.image_1}`;
      case 'plant':
        return `plant-accessories/${baseProduct.image_1}`;
      default:
        return baseProduct.image_1;
    }
  }
}