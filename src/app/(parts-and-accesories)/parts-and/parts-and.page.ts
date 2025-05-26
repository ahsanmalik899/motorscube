import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts-and',
  templateUrl: './parts-and.page.html',
  styleUrls: ['./parts-and.page.scss'],
  standalone:false,
})
export class PartsAndPage implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
back(){
  history.back()
}

  categories = [
    { title: 'Car Parts', value: 'car', image: '../../assets/parts-and-accesories/parts-cars.png', price: 'From $9.99' },
    { title: 'Bike Parts', value: 'bike', image: '../../assets/parts-and-accesories/parts-bike.png', price: 'From $7.99' },
    { title: 'Commercial Vehicle', value: 'commercial', image: '../../assets/parts-and-accesories/parts-commercial.png', price: 'From $29.99' },
    { title: 'Industrial Plant', value: 'industrial', image: '../../assets/parts-and-accesories/parts-plant.png', price: 'From $49.99' },
    { title: 'Machinery', value: 'machinery', image: '../../assets/parts-and-accesories/parts-machinery.png', price: 'From $39.99' }
  ];
  navigateToCategory(category: string) {
    // Replace with actual navigation logic or route structure as needed
    this.router.navigate(['/category', category]);
  }
}
