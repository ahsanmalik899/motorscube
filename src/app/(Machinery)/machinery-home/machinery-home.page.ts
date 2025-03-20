import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machinery-home',
  templateUrl: './machinery-home.page.html',
  styleUrls: ['./machinery-home.page.scss'],
  standalone:false,
})
export class MachineryHomePage implements OnInit {
back() {
  this.router.navigate(['/home']);
}
navigateToMainMenu() {
throw new Error('Method not implemented.');
}
carSaleListing() {
throw new Error('Method not implemented.');
}
carSaleData: any;
carSalePosting() {
throw new Error('Method not implemented.');
}
carHirePosting() {
throw new Error('Method not implemented.');
}
carHireListing() {
throw new Error('Method not implemented.');
}
carHireData: any;
carInsurance() {
throw new Error('Method not implemented.');
}
carLeasing() {
throw new Error('Method not implemented.');
}
carDealer() {
throw new Error('Method not implemented.');
}
carShowroom() {
throw new Error('Method not implemented.');
}
carImporter() {
throw new Error('Method not implemented.');
}
carExporter() {
throw new Error('Method not implemented.');
}
carSchool() {
throw new Error('Method not implemented.');
}
carWorkshop() {
throw new Error('Method not implemented.');
}
selectedIcon: any;
selectIcon(arg0: string) {
throw new Error('Method not implemented.');
}

  constructor( private router: Router,) { }

  ngOnInit() {
  }

}
