import { UpdateBikeSalePostPage } from './(bike)/update-bike-sale-post/update-bike-sale-post.page';
import { MainMenuAfterLoginPageRoutingModule } from './(side-menue)/main-menu-after-login/main-menu-after-login-routing.module';
import { UpdateShowroomBusinesPage } from './(car)/update-showroom-busines/update-showroom-busines.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';  // <-- Add this import
import { IonicStorageModule } from '@ionic/storage-angular';  // <-- Add this import
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginPageModule } from './(user)/login/login.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyCarAdsPaymentComponent } from './(car)/my-car-ads-payment/my-car-ads-payment.component';  // Import your component
import { PostShowroomBusinesPage } from './(car)/post-showroom-busines/post-showroom-busines.page';
import { PostInsuranceBusinesPage } from './(car)/post-insurance-busines/post-insurance-busines.page';
import { PostLeasingBusinesPage } from './(car)/post-leasing-busines/post-leasing-busines.page';
import { PostImporterBusinesPage } from './(car)/post-importer-busines/post-importer-busines.page';
import { PostExporterBusinesPage } from './(car)/post-exporter-busines/post-exporter-busines.page';
import { PostWorkshopBusinesPage } from './(car)/post-workshop-busines/post-workshop-busines.page';
import { PostDrivingSchoolPage } from './(car)/post-driving-school/post-driving-school.page';  // Make sure these paths are correct
import { PostDealerBusinesPage } from './(car)/post-dealer-busines/post-dealer-busines.page';
import { AccountProfPvtPage } from './(user)/account-prof-pvt/account-prof-pvt.page';
import { ResetPasswordPage } from './(user)/reset-password/reset-password.page';
import { AccCreatePvtPage } from './(user)/acc-create-pvt/acc-create-pvt.page';
import { AccountProfBusinesPage } from './(user)/account-prof-busines/account-prof-busines.page';
import { CarAdSaleUpdatePage } from './(car)/car-ad-sale-update/car-ad-sale-update.page';
import { RadioButtonModule } from 'primeng/radiobutton'; 
import { ForgetPaswrdPage } from './(user)/forget-paswrd/forget-paswrd.page';
import { CommonModule } from '@angular/common';
import { CarAdSaleUpdatePageRoutingModule } from './(car)/car-ad-sale-update/car-ad-sale-update-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HireFiltersPage } from './(car)/hire-filters/hire-filters.page';
import { UpdateDealerBusinesPage } from './(car)/update-dealer-busines/update-dealer-busines.page';
import { UpdateExporterBusinesPage } from './(car)/update-exporter-busines/update-exporter-busines.page';
import { UpdateImporterBusinesPage } from './(car)/update-importer-busines/update-importer-busines.page';
import { UpdateInsuranceBusinesPage } from './(car)/update-insurance-busines/update-insurance-busines.page';
import { UpdateLeasingBusinesPage } from './(car)/update-leasing-busines/update-leasing-busines.page';
import { UpdateSchoolBusinesPage } from './(car)/update-school-busines/update-school-busines.page';
import { UpdateWorkshopBusinesPage } from './(car)/update-workshop-busines/update-workshop-busines.page';
import { CarAdHireUpdatePage } from './(car)/car-ad-hire-update/car-ad-hire-update.page';
import { Location } from '@angular/common';
import { AdsUpgradeHotspotPage } from './(user)/ads-upgrade-hotspot/ads-upgrade-hotspot.page';
import { AdsUpgradeSupremePage } from './(car)/ads-upgrade-supreme/ads-upgrade-supreme.page';
import { MyCarAdsPage } from './(car)/my-car-ads/my-car-ads.page';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MainMenuAfterLoginPage } from './(side-menue)/main-menu-after-login/main-menu-after-login.page';
import { LoginPage } from './(user)/login/login.page';
import { BikeHomePage } from './(bike)/bike-home/bike-home.page';
import { BikePostSalePage } from './(bike)/bike-post-sale/bike-post-sale.page';
import { CommerciaVehiclesHomePage } from './(commercial-vehicles)/commercials-vehicles-home/commercia-vehicles-home.page';
import { BikePostInsuranceBusnessPage } from './(bike)/bike-post-insurance-busness/bike-post-insurance-busness.page';
import { BikePostDealershipBusinessPage } from './(bike)/bike-post-dealership-business/bike-post-dealership-business.page';
import { BikePostShowroomBusnessesPage } from './(bike)/bike-post-showroom-busnesses/bike-post-showroom-busnesses.page';
import { BikePostLeasingBusnessPage } from './(bike)/bike-post-leasing-busness/bike-post-leasing-busness.page';
import { BikePostImporterBusenessPage } from './(bike)/bike-post-importer-buseness/bike-post-importer-buseness.page';
import { BikePostExporterBusnessPage } from './(bike)/bike-post-exporter-busness/bike-post-exporter-busness.page';
import { BikePostWorkshopBusnessPage } from './(bike)/bike-post-workshop-busness/bike-post-workshop-busness.page';
import { UpdateBikeInsurancePostPage } from './(bike)/update-bike-insurance-post/update-bike-insurance-post.page';
import { UpdateBikeDealershipPagePage } from './(bike)/update-bike-dealership-page/update-bike-dealership-page.page';
import { UpdateBikeShowroomPagePage } from './(bike)/update-bike-showroom-page/update-bike-showroom-page.page';
import { UpdateBikeLeasingPagePage } from './(bike)/update-bike-leasing-page/update-bike-leasing-page.page';
import { UpdateBikeImporterPagePage } from './(bike)/update-bike-importer-page/update-bike-importer-page.page';
import { UpdateBikeWorkshopPagePage } from './(bike)/update-bike-workshop-page/update-bike-workshop-page.page';
import { VehicleSaleFilterPage } from './(commercial-vehicles)/vehicle-sale-filter/vehicle-sale-filter.page';
import { VehicalHireFilterPage } from './(commercial-vehicles)/vehical-hire-filter/vehical-hire-filter.page';
import { PostVehicleHirePage } from './(commercial-vehicles)/post-vehicle-hire/post-vehicle-hire.page';
import { PostVehicleSaleAdPage } from './(commercial-vehicles)/post-vehicle-sale-ad/post-vehicle-sale-ad.page';
import { UpdateVehicleHirePostPage } from './(commercial-vehicles)/update-vehicle-hire-post/update-vehicle-hire-post.page';
import { UpdateVehicleSalePostPage } from './(commercial-vehicles)/update-vehicle-sale-post/update-vehicle-sale-post.page';
import { UpdateVehicleWorkshopPage } from './(commercial-vehicles)/update-vehicle-workshop/update-vehicle-workshop.page';
import { UpdateVehicleShowroomPage } from './(commercial-vehicles)/update-vehicle-showroom/update-vehicle-showroom.page';
import { UpdateVehicleLeasingPage } from './(commercial-vehicles)/update-vehicle-leasing/update-vehicle-leasing.page';
import { UpdateVehicleInsurancePage } from './(commercial-vehicles)/update-vehicle-insurance/update-vehicle-insurance.page';
import { UpdateVehicleImporterPage } from './(commercial-vehicles)/update-vehicle-importer/update-vehicle-importer.page';
import { UpdateVehicleExporterPage } from './(commercial-vehicles)/update-vehicle-exporter/update-vehicle-exporter.page';
import { UpdateVehicleDrivingSchoolPage } from './(commercial-vehicles)/update-vehicle-driving-school/update-vehicle-driving-school.page';
import { UpdateVehicleDealerPage } from './(commercial-vehicles)/update-vehicle-dealer/update-vehicle-dealer.page';
import { PostVehicleWorkshopPage } from './(commercial-vehicles)/post-vehicle-workshop/post-vehicle-workshop.page';
import { PostVehicleShowroomPage } from './(commercial-vehicles)/post-vehicle-showroom/post-vehicle-showroom.page';
import { PostVehicleLeasingPage } from './(commercial-vehicles)/post-vehicle-leasing/post-vehicle-leasing.page';
import { PostVehicleInsurancePage } from './(commercial-vehicles)/post-vehicle-insurance/post-vehicle-insurance.page';
import { PostVehicleImporterPage } from './(commercial-vehicles)/post-vehicle-importer/post-vehicle-importer.page';
import { PostVehicleExporterPage } from './(commercial-vehicles)/post-vehicle-exporter/post-vehicle-exporter.page';
import { PostVehicleDrivingSchoolPage } from './(commercial-vehicles)/post-vehicle-driving-school/post-vehicle-driving-school.page';
import { PostVehicleDealerPage } from './(commercial-vehicles)/post-vehicle-dealer/post-vehicle-dealer.page';
import { MachineryHomePage } from './(Machinery)/machinery-home/machinery-home.page';
import { MachinerySaleFilterPage } from './(Machinery)/machinery-sale-filter/machinery-sale-filter.page';
import { PostMachinerySalePage } from './(Machinery)/post-machinery-sale/post-machinery-sale.page';
import { PostMachineryDealerPage } from './(Machinery)/post-machinery-dealer/post-machinery-dealer.page';
import { PostMachineryExporterPage } from './(Machinery)/post-machinery-exporter/post-machinery-exporter.page';
import { PostMachineryImporterPage } from './(Machinery)/post-machinery-importer/post-machinery-importer.page';
import { PostMachineryInsurancePage } from './(Machinery)/post-machinery-insurance/post-machinery-insurance.page';
import { PostMachineryLeasingPage } from './(Machinery)/post-machinery-leasing/post-machinery-leasing.page';
import { PostMachineryShowroomPage } from './(Machinery)/post-machinery-showroom/post-machinery-showroom.page';
import { PostMachineryWorkshopPage } from './(Machinery)/post-machinery-workshop/post-machinery-workshop.page';
import { PostMachineryDrivingSchoolPage } from './(Machinery)/post-machinery-driving-school/post-machinery-driving-school.page';
import { UpdateMachineryDealerPage } from './(Machinery)/update-machinery-dealer/update-machinery-dealer.page';
import { UpdateMachineryDrivingSchoolPage } from './(Machinery)/update-machinery-driving-school/update-machinery-driving-school.page';
import { UpdateMachineryExporterPage } from './(Machinery)/update-machinery-exporter/update-machinery-exporter.page';
import { UpdateMachineryImporterPage } from './(Machinery)/update-machinery-importer/update-machinery-importer.page';
import { UpdateMachineryInsurancePage } from './(Machinery)/update-machinery-insurance/update-machinery-insurance.page';
import { UpdateMachineryLeasingPage } from './(Machinery)/update-machinery-leasing/update-machinery-leasing.page';
import { UpdateMachineryShowroomPage } from './(Machinery)/update-machinery-showroom/update-machinery-showroom.page';
import { UpdateMachineryWorkshopPage } from './(Machinery)/update-machinery-workshop/update-machinery-workshop.page';
import { UpdateMachinerySalePage } from './(Machinery)/update-machinery-sale/update-machinery-sale.page';
import { IndustrialPlantHomePage } from './(industrial-plants)/industrial-plant-home/industrial-plant-home.page';
import { PostPlantSalePage } from './(industrial-plants)/post-plant-sale/post-plant-sale.page';
import { PostPlantDealerPage } from './(industrial-plants)/post-plant-dealer/post-plant-dealer.page';
import { PostPlantExporterPage } from './(industrial-plants)/post-plant-exporter/post-plant-exporter.page';
import { PostPlantImporterPage } from './(industrial-plants)/post-plant-importer/post-plant-importer.page';
import { PostPlantInsurancePage } from './(industrial-plants)/post-plant-insurance/post-plant-insurance.page';
import { PostPlantLeasingPage } from './(industrial-plants)/post-plant-leasing/post-plant-leasing.page';
import { PostPlantSchoolPage } from './(industrial-plants)/post-plant-school/post-plant-school.page';
import { PostPlantShowroomPage } from './(industrial-plants)/post-plant-showroom/post-plant-showroom.page';
import { PostPlantWorkshopPage } from './(industrial-plants)/post-plant-workshop/post-plant-workshop.page';
import { UpdatePlantDealerPage } from './(industrial-plants)/update-plant-dealer/update-plant-dealer.page';
import { UpdatePlantExporterPage } from './(industrial-plants)/update-plant-exporter/update-plant-exporter.page';
import { UpdatePlantImporterPage } from './(industrial-plants)/update-plant-importer/update-plant-importer.page';
import { UpdatePlantInsurancePage } from './(industrial-plants)/update-plant-insurance/update-plant-insurance.page';
import { UpdatePlantLeasingPage } from './(industrial-plants)/update-plant-leasing/update-plant-leasing.page';
import { UpdatePlantSchoolPage } from './(industrial-plants)/update-plant-school/update-plant-school.page';
import { UpdatePlantShowroomPage } from './(industrial-plants)/update-plant-showroom/update-plant-showroom.page';
import { UpdatePlantWorkshopPage } from './(industrial-plants)/update-plant-workshop/update-plant-workshop.page';
@NgModule({
  declarations: [
    AppComponent,
    MyCarAdsPage,
    MyCarAdsPaymentComponent, 
    PostDealerBusinesPage, 
    PostShowroomBusinesPage,
    PostInsuranceBusinesPage,
    PostLeasingBusinesPage,
    PostImporterBusinesPage,
    PostExporterBusinesPage,
    PostWorkshopBusinesPage,
    PostDrivingSchoolPage,
    AccountProfPvtPage,
    AccCreatePvtPage,
    AccountProfBusinesPage,
    ForgetPaswrdPage,
    HireFiltersPage,
    UpdateDealerBusinesPage,
    UpdateExporterBusinesPage,
    UpdateImporterBusinesPage,
    UpdateInsuranceBusinesPage,
    UpdateLeasingBusinesPage,
    UpdateSchoolBusinesPage,
    UpdateShowroomBusinesPage,
    UpdateWorkshopBusinesPage,
    CarAdHireUpdatePage,
    CarAdSaleUpdatePage,
    AdsUpgradeHotspotPage,
    AdsUpgradeSupremePage,
    CarAdHireUpdatePage,
    BikePostSalePage,
    BikeHomePage,
    CommerciaVehiclesHomePage,
    // Bike Business Pages
    BikePostInsuranceBusnessPage,
    BikePostDealershipBusinessPage,
    BikePostShowroomBusnessesPage,
    BikePostLeasingBusnessPage,
    BikePostImporterBusenessPage,
    BikePostExporterBusnessPage,
    BikePostWorkshopBusnessPage,
    UpdateBikeInsurancePostPage,
    UpdateBikeLeasingPagePage,
    UpdateBikeImporterPagePage,
    UpdateBikeWorkshopPagePage,
    UpdateBikeDealershipPagePage,
    UpdateBikeShowroomPagePage,
    UpdateBikeSalePostPage,
    VehicleSaleFilterPage,
    VehicalHireFilterPage,
    PostVehicleHirePage,
    PostVehicleSaleAdPage,
    UpdateVehicleHirePostPage,
    UpdateVehicleSalePostPage,
    UpdateVehicleWorkshopPage,
    UpdateVehicleShowroomPage,
    UpdateVehicleLeasingPage,
    UpdateVehicleInsurancePage,
    UpdateVehicleImporterPage,
    UpdateVehicleExporterPage,
    UpdateVehicleDrivingSchoolPage,
    UpdateVehicleDealerPage,
    PostVehicleWorkshopPage,
    PostVehicleShowroomPage,
    PostVehicleLeasingPage,
    PostVehicleInsurancePage,
    PostVehicleImporterPage,
    PostVehicleExporterPage,
    PostVehicleDrivingSchoolPage,
    PostVehicleDealerPage,
    MachineryHomePage,
    MachinerySaleFilterPage,
    PostMachinerySalePage,
    PostMachineryDealerPage,
    PostMachineryExporterPage,
    PostMachineryImporterPage,
    PostMachineryInsurancePage,
    PostMachineryLeasingPage,
    PostMachineryShowroomPage,
    PostMachineryWorkshopPage,
    PostMachineryDrivingSchoolPage,
    UpdateMachineryDealerPage,
    UpdateMachineryDrivingSchoolPage,
    UpdateMachineryExporterPage,
    UpdateMachineryImporterPage,
    UpdateMachineryInsurancePage,
    UpdateMachineryLeasingPage,
    UpdateMachineryShowroomPage,
    UpdateMachineryWorkshopPage,
    UpdateMachinerySalePage,
    IndustrialPlantHomePage,
    PostPlantSalePage,
    PostPlantDealerPage,
    PostPlantExporterPage,
    PostPlantImporterPage,
    PostPlantInsurancePage,
    PostPlantLeasingPage,
    PostPlantSchoolPage,
    PostPlantShowroomPage,
    PostPlantWorkshopPage,
    UpdatePlantDealerPage,
    UpdatePlantExporterPage,
    UpdatePlantImporterPage,
    UpdatePlantInsurancePage,
    UpdatePlantLeasingPage,
    UpdatePlantSchoolPage,
    UpdatePlantShowroomPage,
    UpdatePlantWorkshopPage,
  ],
 
  bootstrap: [AppComponent],
  imports: [
        IonicModule.forRoot(),
    BrowserModule,
    ScrollingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,  // <-- Add HttpClientModule here
    IonicStorageModule.forRoot(),  // <-- Add IonicStorageModule here to provide Storage
    RadioButtonModule,
    CommonModule,
    FormsModule,
   
    MatSnackBarModule,
  

  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule {

  
}
