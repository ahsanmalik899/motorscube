import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { PartsAndAccesoriesService } from 'src/app/(services)/parts-and-accesories.service';

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
  car_ad_normal_feature: string;
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
  bike_ad_normal_feature: string;
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
  vehicle_feature_type: string;
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
  access_featuretype: string;
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
  ad_type: string;
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
    private loadingCtrl: LoadingController,
    private partsandaccesorys:PartsAndAccesoriesService,
    private alertController: AlertController,
    private cdr: ChangeDetectorRef
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
      const response = await this.partsandaccesorys.getmyproducts(this.storeId).toPromise();
  
      if (response && response.success) {
        console.log('Raw API Response:', response);
  
        this.products = response.products.map((product: any) => {
          console.log('Product ad_type:', product.ad_type);
  
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
        this.presentToast(response?.message || 'Failed to load products', 'danger');
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
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this product?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.executeDelete(product);
          }
        }
      ]
    });

    await alert.present();
  }

  private async executeDelete(product: Product) {
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
        // Create new arrays instead of modifying existing ones
        this.products = [...this.products.filter(p => {
          switch (p.type) {
            case 'car': return p.car_ad_accessories_id !== productId;
            case 'bike': return p.bike_ad_accessories_id !== productId;
            case 'commercial': return p.commercial_vehicle_access_ad_sale_id !== productId;
            case 'machinery': return p.machinery_access_ad_sale_id !== productId;
            case 'plant': return p.plant_access_ad_sale_id !== productId;
            default: return true;
          }
        })];

        this.filteredProducts = [...this.products];
        
        // Force change detection
        this.cdr.detectChanges();
        
        this.presentToast('Product deleted successfully', 'success');
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
    console.log('Original image path:', baseProduct.image_1);
    
    if (!baseProduct.image_1) {
      console.log('No image path found, using placeholder');
      return 'assets/images/placeholder.png';
    }

    // Extract filename from any path format
    let filename: string;
    if (baseProduct.image_1.includes('http://localhost/')) {
      filename = baseProduct.image_1.split('/').pop() || '';
    } else if (baseProduct.image_1.includes('\\')) {
      // Handle Windows paths
      filename = baseProduct.image_1.split('\\').pop() || '';
    } else {
      filename = baseProduct.image_1;
    }

    // Clean up the filename
    filename = filename.replace(/^.*[\\\/]/, ''); // Remove any remaining path
    console.log('Extracted filename:', filename);

    if (!filename) {
      console.log('No filename found in path, using placeholder');
      return 'assets/images/placeholder.png';
    }

    const finalPath = `http://localhost/${filename}`;
    console.log('Final constructed path:', finalPath);
    return finalPath;
  }

  getAdType(product: Product): string {
    const adType = (() => {
      switch (product.type) {
        case 'car':
          return (product as CarProduct).car_ad_normal_feature || 'General';
        case 'bike':
          return (product as BikeProduct).bike_ad_normal_feature || 'General';
        case 'commercial':
          return (product as CommercialVehicleProduct).vehicle_feature_type || 'General';
        case 'machinery':
          return (product as MachineryProduct).access_featuretype || 'General';
        case 'plant':
          return (product as PlantProduct).ad_type || 'General';
        default:
          return 'General';
      }
    })();
    console.log(`Ad Type for ${product.type}:`, adType);
    return adType;
  }

  getAdTypeClass(product: Product): string {
    const adType = this.getAdType(product);
    switch (adType.toLowerCase()) {
      case 'supreme':
        return 'supreme';
      case 'hotspot':
        return 'hotspot';
      default:
        return 'general';
    }
  }
}