import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PartsAndAccesoriesService } from 'src/app/(services)/parts-and-accesories.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone:false,
})
export class ProductDetailPage implements OnInit {
  product: any = null;
  loading: boolean = true;
  error: string | null = null;
  relatedProducts: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private partsandaccesorys: PartsAndAccesoriesService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    const productType = this.route.snapshot.paramMap.get('type');
    
    if (productId && productType) {
      this.loadProductDetails(productId, productType);
    } else {
      this.error = 'Product not found';
      this.loading = false;
    }
  }

  loadProductDetails(id: string, type: string) {
    this.loading = true;
    this.error = null;

    this.partsandaccesorys.getProductDetails(id, type).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.product = response.product;
          this.loadRelatedProducts();
        } else {
          this.error = response.message || 'Failed to load product details';
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading product details:', error);
        this.error = 'Failed to load product details. Please try again later.';
        this.loading = false;
      }
    });
  }

  loadRelatedProducts() {
    if (!this.product) return;

    this.partsandaccesorys.getallproducts().subscribe({
      next: (response: any) => {
        if (response.success) {
          // Filter related products based on category and type
          this.relatedProducts = response.products
            .filter((p: any) => 
              p.post_status === 'Active' && 
              p.product_id !== this.product.product_id &&
              (p.category === this.product.category || p.ad_for === this.product.ad_for)
            )
            .slice(0, 4); // Show only 4 related products
        }
      },
      error: (error) => {
        console.error('Error loading related products:', error);
      }
    });
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

  contactSeller() {
    // Implement contact seller functionality
    console.log('Contact seller for product:', this.product);
  }

  addToCart() {
    // Implement add to cart functionality
    console.log('Add to cart:', this.product);
  }

  viewRelatedProduct(product: any) {
    let type = 'car';
    if (product.bike_ad_accessories_id) type = 'bike';
    else if (product.commercial_vehicle_access_ad_sale_id) type = 'commercial';
    else if (product.machinery_access_ad_sale_id) type = 'machinery';
    else if (product.plant_access_ad_sale_id) type = 'plant';

    const id = product.product_id || 
               product.car_ad_accessories_id || 
               product.bike_ad_accessories_id || 
               product.commercial_vehicle_access_ad_sale_id || 
               product.machinery_access_ad_sale_id || 
               product.plant_access_ad_sale_id;

    if (id) {
      this.router.navigate(['/product-detail', type, id.toString()]);
    }
  }

  back() {
    this.navCtrl.back();
  }
}
