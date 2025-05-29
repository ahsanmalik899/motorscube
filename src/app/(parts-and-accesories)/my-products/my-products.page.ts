import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}
@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.page.html',
  styleUrls: ['./my-products.page.scss'],
  standalone:false,
})
export class MyProductsPage implements OnInit {
  products:Product[] = [];
    selectedCategory: string | null = null;
  constructor(private router: Router) { }
 showProductOptions = false;

productTypeButtons = [
  {
    text: 'Car',
    icon: 'car-outline',
    handler: () => this.router.navigate(['/add-car']),
  },
  {
    text: 'Bike',
    icon: 'bicycle-outline',
    handler: () => this.router.navigate(['/add-bike']),
  },
  {
    text: 'Commercial Vehicle',
    icon: 'bus-outline', // or 'trailers-outline' if you have a custom icon
    handler: () => this.router.navigate(['/add-commercial-vehicle']),
  },
  {
    text: 'Heavy Machinery (e.g. Cranes)',
    icon: 'construct-outline',
    handler: () => this.router.navigate(['/add-machinery']),
  },
  {
    text: 'Industrial Plant (e.g. Factories)',
    icon: 'business-outline', // changed from leaf to better represent plants
    handler: () => this.router.navigate(['/add-plant']),
  },
  {
    text: 'Cancel',
    role: 'cancel',
    icon: 'close-outline'
  }
];


  ngOnInit() {
     this.loadDummyProducts();
  }
loadDummyProducts() {
  this.products = [
    {
      id: 1,
      name: 'Bike Helmet',
      category: 'Accessories',
      description: 'High-quality bike helmet with adjustable straps.',
      price: 29.99,
      image: 'https://via.placeholder.com/300x200.png?text=Bike+Helmet',
    },
    {
      id: 2,
      name: 'Car Phone Holder',
      category: 'Gadgets',
      description: 'Dashboard mount for smartphones, easy to install.',
      price: 15.5,
      image: 'https://via.placeholder.com/300x200.png?text=Phone+Holder',
    },
    {
      id: 3,
      name: 'Tool Kit',
      category: 'Machinery',
      description: 'Complete tool kit for home and workshop use.',
      price: 49.99,
      image: 'https://via.placeholder.com/300x200.png?text=Tool+Kit',
    },
  ];
}
  openProductOptions() {
    this.showProductOptions = true;
  }
}