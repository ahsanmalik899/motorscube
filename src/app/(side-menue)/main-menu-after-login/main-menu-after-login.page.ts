import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-main-menu-after-login',
    templateUrl: './main-menu-after-login.page.html',
    styleUrls: ['./main-menu-after-login.page.scss'],
    standalone: false
})
export class MainMenuAfterLoginPage implements OnInit {
back() {
this.router.navigate(['/home'])
}

  carDropdownVisible = false;
  BikeDropdownVisible = false;
  dropdownVisible = false;
  userID: string | null;
  userType: string | null;

  constructor(public router: Router) {
    this.userID = sessionStorage.getItem('userId')??'';
    this.userType = sessionStorage.getItem('userType')??'';
      
      if(this.userType==''||this.userID==''){
        this.userType = localStorage.getItem('userType');
        this.userID = localStorage.getItem('userId');
      }
    

   
  }

  ngOnInit() {
    if(this.userType==''||this.userID==''){
      this.userType = localStorage.getItem('userType');
      this.userID = localStorage.getItem('userId');
    }
  }


  navigateToCar(){
    this.router.navigate(['/my-car-ads']);
  }
  navigateToNewCar(){
    this.router.navigate(['/my-car-ads']);
  }
  navigateToBusiness(){
    
    this.router.navigate(['/your-business']);
  }
  navigateToForSale(){
    this.router.navigate(['/for-sale']);
  }
  navigateToForBikeSale(){
    this.router.navigate(['/bike-sale-listing']);
  }
  navigateToForHire(){
    this.router.navigate(['/for-hire']);
  }
  navigateToPostSale(){
    this.router.navigate(['/car-sale-post']);
  }
  navigateToPostBikeSale(){
    this.router.navigate(['/bike-post-sale']);
  }
  navigateToPostHire(){
    this.router.navigate(['/car-hire']);
  }
  navigateToDealer(){
    this.router.navigate(['/listing-dealer']);
  }
  navigateToBikeDealer(){
    this.router.navigate(['/listing-bike-dealer']);
  }
  navigateToShowroom(){
    this.router.navigate(['/listing-showroom']);
  }
  navigateToBikeShowroom(){
    this.router.navigate(['/listing-bike-showroom']);
  }
  navigateToImporter(){
    this.router.navigate(['/listing-importer']);
  }
  navigateToBikeImporter(){
    this.router.navigate(['/listing-bike-importer']);
  }
  navigateToExporter(){
    this.router.navigate(['/listing-exporter']);
  }
  navigateToBikeExporter(){
    this.router.navigate(['/listing-bike-exporter']);
  }
  navigateToInsurance(){
    this.router.navigate(['/listing-insurance']);
  }
  navigateToBikeInsurance(){
    this.router.navigate(['/listing-bike-insurance']);
  }
  navigateToLeasing(){
    this.router.navigate(['/listing-leasing']);
  }
  navigateToBikeLeasing(){
    this.router.navigate(['/listing-bike-leasing']);
  }
  navigateToWorkshop(){
    this.router.navigate(['/listing-workshop']);
  }
  navigateToBikeWorkshop(){
    this.router.navigate(['/listing-bike-workshop']);
  }
  navigateToSchool(){
    this.router.navigate(['/listing-drv-school']);
  }

  toggleCarDropdown() {
    this.carDropdownVisible = !this.carDropdownVisible;
  }
  toggleBikeDropdown() {
    this.BikeDropdownVisible = !this.BikeDropdownVisible;
  }
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  goToWallet(){
    this.router.navigate(['/wallet-bundles']);
  }
  goToProfile(){
    if (this.userType === 'Trader'){
      this.router.navigate(['/account-prof-busines']);
    }
    else{
      this.router.navigate(['/account-prof-pvt']);
    }
  }

}

