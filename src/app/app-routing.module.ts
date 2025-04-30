import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'main-menu-after-login',
    loadChildren: () => import('./(side-menue)/main-menu-after-login/main-menu-after-login.module').then( m => m.MainMenuAfterLoginPageModule)
  },
  {
    path: 'car-home',
    loadChildren: () => import('./(car)/car-home/car-home.module').then( m => m.CarHomePageModule)
  },
  {
    path: 'main-menu',
    loadChildren: () => import('./(side-menue)/main-menu/main-menu.module').then( m => m.MainMenuPageModule)
  },
  {
    path: 'for-sale',
    loadChildren: () => import('./(car)/for-sale/for-sale.module').then( m => m.ForSalePageModule)
  },
  {
    path: 'for-hire',
    loadChildren: () => import('./(car)/for-hire/for-hire.module').then( m => m.ForHirePageModule)
  },
  {
    path: 'car-hire',
    loadChildren: () => import('./(car)/car-hire/car-hire.module').then( m => m.CarHirePageModule)
  },
  {
    path: 'car-sale-post',
    loadChildren: () => import('./(car)/car-sale-post/car-sale-post.module').then( m => m.CarSalePostPageModule)
  },
  {
    path: 'listing-leasing',
    loadChildren: () => import('./(car)/listing-leasing/listing-leasing.module').then( m => m.ListingLeasingPageModule)
  },
  {
    path: 'listing-dealer',
    loadChildren: () => import('./(car)/listing-dealer/listing-dealer.module').then( m => m.ListingDealerPageModule)
  },
  {
    path: 'listing-importer',
    loadChildren: () => import('./(car)/listing-importer/listing-importer.module').then( m => m.ListingImporterPageModule)
  },
  {
    path: 'listing-exporter',
    loadChildren: () => import('./(car)/listing-exporter/listing-exporter.module').then( m => m.ListingExporterPageModule)
  },
  {
    path: 'listing-showroom',
    loadChildren: () => import('./(car)/listing-showroom/listing-showroom.module').then( m => m.ListingShowroomPageModule)
  },
  {
    path: 'listing-workshop',
    loadChildren: () => import('./(car)/listing-workshop/listing-workshop.module').then( m => m.ListingWorkshopPageModule)
  },
  {
    path: 'listing-drv-school',
    loadChildren: () => import('./(car)/listing-drv-school/listing-drv-school.module').then( m => m.ListingDrvSchoolPageModule)
  },
  {
    path: 'listing-insurance',
    loadChildren: () => import('./(car)/listing-insurance/listing-insurance.module').then( m => m.ListingInsurancePageModule)
  },
  {
    path: 'sale-single-view',
    loadChildren: () => import('./(car)/sale-single-view/sale-single-view.module').then( m => m.SaleSingleViewPageModule)
  },
  {
    path: 'hire-single-view',
    loadChildren: () => import('./(car)/hire-single-view/hire-single-view.module').then( m => m.HireSingleViewPageModule)
  },
  {
    path: 'sale-filters',
    loadChildren: () => import('./(car)/sale-filters/sale-filters.module').then( m => m.SaleFiltersPageModule)
  },
  {
    path: 'hire-filters',
    loadChildren: () => import('./(car)/hire-filters/hire-filters.module').then( m => m.HireFiltersPageModule)
  },
  {
    path: 'listing-insurance-filter',
    loadChildren: () => import('./(car)/listing-insurance-filter/listing-insurance-filter.module').then( m => m.ListingInsuranceFilterPageModule)
  },
  {
    path: 'listing-leasing-filter',
    loadChildren: () => import('./(car)/listing-leasing-filter/listing-leasing-filter.module').then( m => m.ListingLeasingFilterPageModule)
  },
  {
    path: 'listing-dealer-filter',
    loadChildren: () => import('./(car)/listing-dealer-filter/listing-dealer-filter.module').then( m => m.ListingDealerFilterPageModule)
  },
  {
    path: 'listing-showroom-filter',
    loadChildren: () => import('./(car)/listing-showroom-filter/listing-showroom-filter.module').then( m => m.ListingShowroomFilterPageModule)
  },
  {
    path: 'listing-importer-filter',
    loadChildren: () => import('./(car)/listing-importer-filter/listing-importer-filter.module').then( m => m.ListingImporterFilterPageModule)
  },
  {
    path: 'listing-exporter-filter',
    loadChildren: () => import('./(car)/listing-exporter-filter/listing-exporter-filter.module').then( m => m.ListingExporterFilterPageModule)
  },
  {
    path: 'listing-drv-school-filter',
    loadChildren: () => import('./(car)/listing-drv-school-filter/listing-drv-school-filter.module').then( m => m.ListingDrvSchoolFilterPageModule)
  },
  {
    path: 'listing-workshop-filter',
    loadChildren: () => import('./(car)/listing-workshop-filter/listing-workshop-filter.module').then( m => m.ListingWorkshopFilterPageModule)
  },
  {
    path: 'insurance-single-view',
    loadChildren: () => import('./(car)/insurance-single-view/insurance-single-view.module').then( m => m.InsuranceSingleViewPageModule)
  },
  {
    path: 'leasing-single-view',
    loadChildren: () => import('./(car)/leasing-single-view/leasing-single-view.module').then( m => m.LeasingSingleViewPageModule)
  },
  {
    path: 'dealer-single-view',
    loadChildren: () => import('./(car)/dealer-single-view/dealer-single-view.module').then( m => m.DealerSingleViewPageModule)
  },
  {
    path: 'ads-upgrade-hotspot',
    loadChildren: () => import('./(user)/ads-upgrade-hotspot/ads-upgrade-hotspot.module').then( m => m.AdsUpgradeHotspotPageModule)
  },

  {
    path: 'showroom-single-view',
    loadChildren: () => import('./(car)/showroom-single-view/showroom-single-view.module').then( m => m.ShowroomSingleViewPageModule)
  },
  {
    path: 'importer-single-view',
    loadChildren: () => import('./(car)/importer-single-view/importer-single-view.module').then( m => m.ImporterSingleViewPageModule)
  },
  {
    path: 'exporter-single-view',
    loadChildren: () => import('./(car)/exporter-single-view/exporter-single-view.module').then( m => m.ExporterSingleViewPageModule)
  },
  {
    path: 'drv-school-single-view',
    loadChildren: () => import('./(car)/drv-school-single-view/drv-school-single-view.module').then( m => m.DrvSchoolSingleViewPageModule)
  },
  {
    path: 'dealer-single-view',
    loadChildren: () => import('./(car)/dealer-single-view/dealer-single-view.module').then( m => m.DealerSingleViewPageModule)
  },
  {
    path: 'workshop-single-view',
    loadChildren: () => import('./(car)/workshop-single-view/workshop-single-view.module').then( m => m.WorkshopSingleViewPageModule)
  },
  {
    path: 'your-business',
    loadChildren: () => import('./(car)/your-business/your-business.module').then( m => m.YourBusinessPageModule)
  },
  {
    path: 'post-dealer-busines',
    loadChildren: () => import('./(car)/post-dealer-busines/post-dealer-busines.module').then( m => m.PostDealerBusinesPageModule)
  },
  {
    path: 'post-showroom-busines',
    loadChildren: () => import('./(car)/post-showroom-busines/post-showroom-busines.module').then( m => m.PostShowroomBusinesPageModule)
  },
  {
    path: 'post-insurance-busines',
    loadChildren: () => import('./(car)/post-insurance-busines/post-insurance-busines.module').then( m => m.PostInsuranceBusinesPageModule)
  },
  {
    path: 'post-leasing-busines',
    loadChildren: () => import('./(car)/post-leasing-busines/post-leasing-busines.module').then( m => m.PostLeasingBusinesPageModule)
  },
  {
    path: 'post-importer-busines',
    loadChildren: () => import('./(car)/post-importer-busines/post-importer-busines.module').then( m => m.PostImporterBusinesPageModule)
  },
  {
    path: 'post-exporter-busines',
    loadChildren: () => import('./(car)/post-exporter-busines/post-exporter-busines.module').then( m => m.PostExporterBusinesPageModule)
  },
  {
    path: 'post-workshop-busines',
    loadChildren: () => import('./(car)/post-workshop-busines/post-workshop-busines.module').then( m => m.PostWorkshopBusinesPageModule)
  },
  {
    path: 'post-driving-school',
    loadChildren: () => import('./(car)/post-driving-school/post-driving-school.module').then( m => m.PostDrivingSchoolPageModule)
  },
  {
    path: 'account-prof-pvt',
    loadChildren: () => import('./(user)/account-prof-pvt/account-prof-pvt.module').then( m => m.AccountProfPvtPageModule)
  },
  {
    path: 'wallet-bundles',
    loadChildren: () => import('./wallet-bundles/wallet-bundles.module').then( m => m.WalletBundlesPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./(user)/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'acc-create-pvt',
    loadChildren: () => import('./(user)/acc-create-pvt/acc-create-pvt.module').then( m => m.AccCreatePvtPageModule)
  },
  {
    path: 'acc-create-busines',
    loadChildren: () => import('./(user)/acc-create-busines/acc-create-busines.module').then( m => m.AccCreateBusinesPageModule)
  },
  {
    path: 'account-prof-busines',
    loadChildren: () => import('./(user)/account-prof-busines/account-prof-busines.module').then( m => m.AccountProfBusinesPageModule)
  },
  {
    path: 'my-car-ads',
    loadChildren: () => import('./(car)/my-car-ads/my-car-ads.module').then( m => m.MyCarAdsPageModule)
  },

  {
    path: 'ads-upgrade-supreme',
    loadChildren: () => import('./(car)/ads-upgrade-supreme/ads-upgrade-supreme.module').then( m => m.AdsUpgradeSupremePageModule)
  },
  {
    path: 'forget-paswrd',
    loadChildren: () => import('./(user)/forget-paswrd/forget-paswrd.module').then( m => m.ForgetPaswrdPageModule)
  },
  {
    path: 'update-dealer-busines',
    loadChildren: () => import('./(car)/update-dealer-busines/update-dealer-busines-routing.module').then( m => m.UpdateDealerBusinesPageRoutingModule)
  },
  {
    path: 'update-exporter-busines',
    loadChildren: () => import('./(car)/update-exporter-busines/update-exporter-busines-routing.module').then( m => m.UpdateExporterBusinesPageRoutingModule)
  },
  {
    path: 'update-importer-busines',
    loadChildren: () => import('./(car)/update-importer-busines/update-importer-busines-routing.module').then( m => m.UpdateImporterBusinesPageRoutingModule)
  },
  {
    path: 'update-insurance-busines',
    loadChildren: () => import('./(car)/update-insurance-busines/update-insurance-busines-routing.module').then( m => m.UpdateInsuranceBusinesPageRoutingModule)
  },

{
  path: 'update-leasing-busines',
  loadChildren: () => import('./(car)/update-leasing-busines/update-leasing-busines-routing.module').then( m => m.UpdateLeasingBusinesPageRoutingModule)
},
  {
    path: 'update-school-busines',
    loadChildren: () => import('./(car)/update-school-busines/update-school-busines-routing.module').then( m => m.UpdateSchoolBusinesPageRoutingModule)
  },
  {
    path: 'update-showroom-busines',
    loadChildren: () => import('./(car)/update-showroom-busines/update-showroom-busines-routing.module').then( m => m.UpdateShowroomBusinesPageRoutingModul)
  },
  {
    path: 'update-workshop-busines',
    loadChildren: () => import('./(car)/update-workshop-busines/update-workshop-busines-routing.module').then( m => m.UpdateWorkshopBusinesPageRoutingModule)
  },
  {
    path: 'car-ad-sale-update',
    loadChildren: () => import('./(car)/car-ad-sale-update/car-ad-sale-update-routing.module').then( m => m.CarAdSaleUpdatePageRoutingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./(user)/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'car-ad-hire-update',
    loadChildren: () => import('./(car)/car-ad-hire-update/car-ad-hire-update-routing.module').then( m => m.CarAdHireUpdatePageRoutingModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./(user)/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./(user)/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./(user)/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'bike-home',
    loadChildren: () => import('./(bike)/bike-home/bike-home.module').then( m => m.BikeHomePageModule)
  },
  {
    path: 'bike-sale-listing',
    loadChildren: () => import('./(bike)/bike-sale-listing/bike-sale-listing.module').then( m => m.BikeSaleListingPageModule)
  },
  {
    path: 'commercial-vehicles-home',
    loadChildren: () => import('./(commercial-vehicles)/commercials-vehicles-home/commercia-vehicles-home.module').then( m => m.CommerciaVehiclesHomePageModule)
  },
  {
    path: 'machinery-home',
    loadChildren: () => import('./(Machinery)/machinery-home/machinery-home.module').then( m => m.MachineryHomePageModule)
  },
  {
    path: 'industrial-plant-home',
    loadChildren: () => import('./(industrial-plants)/industrial-plant-home/industrial-plant-home.module').then( m => m.IndustrialPlantHomePageModule)
  },
  {
    path: 'bike-single-view',
    loadChildren: () => import('./(bike)/bike-single-view/bike-single-view.module').then( m => m.BikeSingleViewPageModule)
  },
  {
    path: 'bike-single-view',
    loadChildren: () => import('./(bike)/bike-single-view/bike-single-view.module').then( m => m.BikeSingleViewPageModule)
  },
  
  {
    path: 'commercial-sale-listing',
    loadChildren: () => import('./(commercial-vehicles)/commercial-sale-listing/commercial-sale-listing.module').then( m => m.CommercialSaleListingPageModule)
  },
  {
    path: 'commercial-hire-listing',
    loadChildren: () => import('./(commercial-vehicles)/commercial-hire-listing/commercial-hire-listing.module').then( m => m.CommercialHireListingPageModule)
  },
  {
    path: 'bike-sale-filter',
    loadChildren: () => import('./(bike)/bike-sale-filter/bike-sale-filter.module').then( m => m.BikeSaleFilterPageModule)
  },
  {
    path: 'listing-bike-importer',
    loadChildren: () => import('./(bike)/listing-bike-importer/listing-bike-importer.module').then( m => m.ListingBikeImporterPageModule)
  },
  {
    path: 'listing-bike-dealer',
    loadChildren: () => import('./(bike)/listing-bike-dealer/listing-bike-dealer.module').then( m => m.ListingBikeDealerPageModule)
  },
  {
    path: 'listing-bike-exporter',
    loadChildren: () => import('./(bike)/listing-bike-exporter/listing-bike-exporter.module').then( m => m.ListingBikeExporterPageModule)
  },
  {
    path: 'listing-bike-insurance',
    loadChildren: () => import('./(bike)/listing-bike-insurance/listing-bike-insurance.module').then( m => m.ListingBikeInsurancePageModule)
  },
  {
    path: 'listing-bike-workshop',
    loadChildren: () => import('./(bike)/listing-bike-workshop/listing-bike-workshop.module').then( m => m.ListingBikeWorkshopPageModule)
  },
  {
    path: 'listing-bike-showroom',
    loadChildren: () => import('./(bike)/listing-bike-showroom/listing-bike-showroom.module').then( m => m.ListingBikeShowroomPageModule)
  },
  {
    path: 'listing-bike-leasing',
    loadChildren: () => import('./(bike)/listing-bike-leasing/listing-bike-leasing.module').then( m => m.ListingBikeLeasingPageModule)
  },
  {
    path: 'bike-dealer-filter',
    loadChildren: () => import('./(bike)/bike-dealer-filter/bike-dealer-filter.module').then( m => m.BikeDealerFilterPageModule)
  },
  {
    path: 'bike-exporter-filter',
    loadChildren: () => import('./(bike)/bike-exporter-filter/bike-exporter-filter.module').then( m => m.BikeExporterFilterPageModule)
  },
  {
    path: 'bike-importer-filter',
    loadChildren: () => import('./(bike)/bike-importer-filter/bike-importer-filter.module').then( m => m.BikeImporterFilterPageModule)
  },
  {
    path: 'bike-insurance-filter',
    loadChildren: () => import('./(bike)/bike-insurance-filter/bike-insurance-filter.module').then( m => m.BikeInsuranceFilterPageModule)
  },
  {
    path: 'bike-showroom-filter',
    loadChildren: () => import('./(bike)/bike-showroom-filter/bike-showroom-filter.module').then( m => m.BikeShowroomFilterPageModule)
  },
  {
    path: 'bike-workshop-filter',
    loadChildren: () => import('./(bike)/bike-workshop-filter/bike-workshop-filter.module').then( m => m.BikeWorkshopFilterPageModule)
  },
  {
    path: 'bike-leasing-filter',
    loadChildren: () => import('./(bike)/bike-leasing-filter/bike-leasing-filter.module').then( m => m.BikeLeasingFilterPageModule)
  },
  {
    path: 'bike-post-sale',
    loadChildren: () => import('./(bike)/bike-post-sale/bike-post-sale.module').then( m => m.BikePostSalePageModule)
  },
  {
    path: 'bike-you-posted',
    loadChildren: () => import('./(bike)/bike-you-posted/bike-you-posted.module').then( m => m.BikeYouPostedPageModule)
  },
  {
    path: 'bike-busenesses',
    loadChildren: () => import('./(bike)/bike-busenesses/bike-busenesses.module').then( m => m.BikeBusenessesPageModule)
  },
  {
    path: 'bike-post-insurance-business',
    loadChildren: () => import('./(bike)/bike-post-insurance-busness/bike-post-insurance-busness.module').then( m => m.BikePostInsuranceBusnessPageModule)
  },
  {
    path: 'bike-post-dealership-business',
    loadChildren: () => import('./(bike)/bike-post-dealership-business/bike-post-dealership-business.module').then( m => m.BikePostDealershipBusinessPageModule)
  },
  {
    path: 'bike-post-showroom-business',
    loadChildren: () => import('./(bike)/bike-post-showroom-busnesses/bike-post-showroom-busnesses.module').then( m => m.BikePostShowroomBusnessesPageModule)
  },
  {
    path: 'bike-post-leasing-business',
    loadChildren: () => import('./(bike)/bike-post-leasing-busness/bike-post-leasing-busness.module').then( m => m.BikePostLeasingBusnessPageModule)
  },
  {
    path: 'bike-post-importer-business',
    loadChildren: () => import('./(bike)/bike-post-importer-buseness/bike-post-importer-buseness.module').then( m => m.BikePostImporterBusenessPageModule)
  },
  {
    path: 'bike-post-exporter-business',
    loadChildren: () => import('./(bike)/bike-post-exporter-busness/bike-post-exporter-busness.module').then( m => m.BikePostExporterBusnessPageModule)
  },
  {
    path: 'bike-post-workshop-business',
    loadChildren: () => import('./(bike)/bike-post-workshop-busness/bike-post-workshop-busness.module').then( m => m.BikePostWorkshopBusnessPageModule)
  },
  {
    path: 'bike-post-showroom-busnesses',
    loadChildren: () => import('./(bike)/bike-post-showroom-busnesses/bike-post-showroom-busnesses.module').then( m => m.BikePostShowroomBusnessesPageModule)
  },
  {
    path: 'bike-post-dealership-business',
    loadChildren: () => import('./(bike)/bike-post-dealership-business/bike-post-dealership-business.module').then( m => m.BikePostDealershipBusinessPageModule)
  },
  {
    path: 'update-bike-insurance-post',
    loadChildren: () => import('./(bike)/update-bike-insurance-post/update-bike-insurance-post.module').then( m => m.UpdateBikeInsurancePostPageModule)
  },
  {
    path: 'update-bike-dealership-page',
    loadChildren: () => import('./(bike)/update-bike-dealership-page/update-bike-dealership-page.module').then( m => m.UpdateBikeDealershipPagePageModule)
  },
  {
    path: 'update-bike-showroom-page',
    loadChildren: () => import('./(bike)/update-bike-showroom-page/update-bike-showroom-page.module').then( m => m.UpdateBikeShowroomPagePageModule)
  },
  {
    path: 'update-bike-leasing-page',
    loadChildren: () => import('./(bike)/update-bike-leasing-page/update-bike-leasing-page.module').then( m => m.UpdateBikeLeasingPagePageModule)
  },
  {
    path: 'update-bike-importer-page',
    loadChildren: () => import('./(bike)/update-bike-importer-page/update-bike-importer-page.module').then( m => m.UpdateBikeImporterPagePageModule)
  },
  {
    path: 'update-bike-exporter-page',
    loadChildren: () => import('./(bike)/update-bike-exporter-page/update-bike-exporter-page.module').then( m => m.UpdateBikeExporterPagePageModule)
  },
  {
    path: 'update-bike-workshop-page',
    loadChildren: () => import('./(bike)/update-bike-workshop-page/update-bike-workshop-page.module').then( m => m.UpdateBikeWorkshopPagePageModule)
  },
  {
    path: 'update-bike-sale-post',
    loadChildren: () => import('./(bike)/update-bike-sale-post/update-bike-sale-post.module').then( m => m.UpdateBikeSalePostPageModule)
  },
  {
    path: 'vehicle-sale-filter',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-sale-filter/vehicle-sale-filter.module').then( m => m.VehicleSaleFilterPageModule)
  },
  {
    path: 'vehical-hire-filter',
    loadChildren: () => import('./(commercial-vehicles)/vehical-hire-filter/vehical-hire-filter.module').then( m => m.VehicalHireFilterPageModule)
  },
  {
    path: 'vehicle-insurance-listing',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-insurance-listing/vehicle-insurance-listing.module').then( m => m.VehicleInsuranceListingPageModule)
  },
  {
    path: 'vehicle-leasing-listing',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-leasing-listing/vehicle-leasing-listing.module').then( m => m.VehicleLeasingListingPageModule)
  },
  {
    path: 'vehicle-dealers-listing',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-dealers-listing/vehicle-dealers-listing.module').then( m => m.VehicleDealersListingPageModule)
  },
  {
    path: 'vehicle-showrooms-listing',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-showrooms-listing/vehicle-showrooms-listing.module').then( m => m.VehicleShowroomsListingPageModule)
  },
  {
    path: 'vehicle-importers-listing',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-importers-listing/vehicle-importers-listing.module').then( m => m.VehicleImportersListingPageModule)
  },
  {
    path: 'vehicle-exporters-listing',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-exporters-listing/vehicle-exporters-listing.module').then( m => m.VehicleExportersListingPageModule)
  },
  {
    path: 'vehicle-driving-shchool-listing',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-driving-shchool-listing/vehicle-driving-shchool-listing.module').then( m => m.VehicleDrivingShchoolListingPageModule)
  },
  {
    path: 'vehicle-workshop-listing',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-workshop-listing/vehicle-workshop-listing.module').then( m => m.VehicleWorkshopListingPageModule)
  },
  {
    path: 'vehicle-sale-single-view',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-sale-single-view/vehicle-sale-single-view.module').then( m => m.VehicleSaleSingleViewPageModule)
  },
  {
    path: 'vehicle-hire-single-view',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-hire-single-view/vehicle-hire-single-view.module').then( m => m.VehicleHireSingleViewPageModule)
  },
  {
    path: 'vehicle-driving-school-listing',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-driving-shchool-listing/vehicle-driving-shchool-listing.module').then( m => m.VehicleDrivingShchoolListingPageModule)
  },
  {
    path: 'vehicle-dealer-filter',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-dealer-filter/vehicle-dealer-filter.module').then( m => m.VehicleDealerFilterPageModule)
  },
  {
    path: 'vehicle-driving-school-filter',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-driving-school-filter/vehicle-driving-school-filter.module').then( m => m.VehicleDrivingSchoolFilterPageModule)
  },
  {
    path: 'vehicle-exporter-filter',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-exporter-filter/vehicle-exporter-filter.module').then( m => m.VehicleExporterFilterPageModule)
  },
  {
    path: 'vehicle-importers-filter',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-importers-filter/vehicle-importers-filter.module').then( m => m.VehicleImportersFilterPageModule)
  },
  {
    path: 'vehicle-insurance-filter',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-insurance-filter/vehicle-insurance-filter.module').then( m => m.VehicleInsuranceFilterPageModule)
  },
  {
    path: 'vehicle-leasing-filter',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-leasing-filter/vehicle-leasing-filter.module').then( m => m.VehicleLeasingFilterPageModule)
  },
  {
    path: 'vehicle-showroom-filter',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-showroom-filter/vehicle-showroom-filter.module').then( m => m.VehicleShowroomFilterPageModule)
  },
  {
    path: 'vehicle-workshoop-filter',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-workshoop-filter/vehicle-workshoop-filter.module').then( m => m.VehicleWorkshoopFilterPageModule)
  },
  {
    path: 'my-vehicles',
    loadChildren: () => import('./(commercial-vehicles)/my-vehicles/my-vehicles.module').then( m => m.MyVehiclesPageModule)
  },
  {
    path: 'commercial-vehicle-buseness',
    loadChildren: () => import('./(commercial-vehicles)/commercial-vehicle-buseness/commercial-vehicle-buseness.module').then( m => m.CommercialVehicleBusenessPageModule)
  },

  {
    path: 'post-vehicle-sale-ad',
    loadChildren: () => import('./(commercial-vehicles)/post-vehicle-sale-ad/post-vehicle-sale-ad.module').then( m => m.PostVehicleSaleAdPageModule)
  },
  {
    path: 'post-vehicle-hire',
    loadChildren: () => import('./(commercial-vehicles)/post-vehicle-hire/post-vehicle-hire.module').then( m => m.PostVehicleHirePageModule)
  },
  {
    path: 'update-vehicle-sale-post',
    loadChildren: () => import('./(commercial-vehicles)/update-vehicle-sale-post/update-vehicle-sale-post.module').then( m => m.UpdateVehicleSalePostPageModule)
  },
  {
    path: 'update-vehicle-hire-post',
    loadChildren: () => import('./(commercial-vehicles)/update-vehicle-hire-post/update-vehicle-hire-post.module').then( m => m.UpdateVehicleHirePostPageModule)
  },
  {
    path: 'post-vehicle-insurance',
    loadChildren: () => import('./(commercial-vehicles)/post-vehicle-insurance/post-vehicle-insurance.module').then( m => m.PostVehicleInsurancePageModule)
  },
  {
    path: 'post-vehicle-leasing',
    loadChildren: () => import('./(commercial-vehicles)/post-vehicle-leasing/post-vehicle-leasing.module').then( m => m.PostVehicleLeasingPageModule)
  },
  {
    path: 'post-vehicle-dealer',
    loadChildren: () => import('./(commercial-vehicles)/post-vehicle-dealer/post-vehicle-dealer.module').then( m => m.PostVehicleDealerPageModule)
  },
  {
    path: 'post-vehicle-showroom',
    loadChildren: () => import('./(commercial-vehicles)/post-vehicle-showroom/post-vehicle-showroom.module').then( m => m.PostVehicleShowroomPageModule)
  },
  {
    path: 'post-vehicle-importer',
    loadChildren: () => import('./(commercial-vehicles)/post-vehicle-importer/post-vehicle-importer.module').then( m => m.PostVehicleImporterPageModule)
  },
  {
    path: 'post-vehicle-driving-school',
    loadChildren: () => import('./(commercial-vehicles)/post-vehicle-driving-school/post-vehicle-driving-school.module').then( m => m.PostVehicleDrivingSchoolPageModule)
  },
  {
    path: 'post-vehicle-workshop',
    loadChildren: () => import('./(commercial-vehicles)/post-vehicle-workshop/post-vehicle-workshop.module').then( m => m.PostVehicleWorkshopPageModule)
  },
  {
    path: 'post-vehicle-exporter',
    loadChildren: () => import('./(commercial-vehicles)/post-vehicle-exporter/post-vehicle-exporter.module').then( m => m.PostVehicleExporterPageModule)
  },
  {
    path: 'update-vehicle-dealer',
    loadChildren: () => import('./(commercial-vehicles)/update-vehicle-dealer/update-vehicle-dealer.module').then( m => m.UpdateVehicleDealerPageModule)
  },
  {
    path: 'update-vehicle-driving-school',
    loadChildren: () => import('./(commercial-vehicles)/update-vehicle-driving-school/update-vehicle-driving-school.module').then( m => m.UpdateVehicleDrivingSchoolPageModule)
  },
  {
    path: 'update-vehicle-exporter',
    loadChildren: () => import('./(commercial-vehicles)/update-vehicle-exporter/update-vehicle-exporter.module').then( m => m.UpdateVehicleExporterPageModule)
  },
  {
    path: 'update-vehicle-importer',
    loadChildren: () => import('./(commercial-vehicles)/update-vehicle-importer/update-vehicle-importer.module').then( m => m.UpdateVehicleImporterPageModule)
  },
  {
    path: 'update-vehicle-leasing',
    loadChildren: () => import('./(commercial-vehicles)/update-vehicle-leasing/update-vehicle-leasing.module').then( m => m.UpdateVehicleLeasingPageModule)
  },
  {
    path: 'update-vehicle-showroom',
    loadChildren: () => import('./(commercial-vehicles)/update-vehicle-showroom/update-vehicle-showroom.module').then( m => m.UpdateVehicleShowroomPageModule)
  },
  {
    path: 'update-vehicle-workshop',
    loadChildren: () => import('./(commercial-vehicles)/update-vehicle-workshop/update-vehicle-workshop.module').then( m => m.UpdateVehicleWorkshopPageModule)
  },
  {
    path: 'update-vehicle-insurance',
    loadChildren: () => import('./(commercial-vehicles)/update-vehicle-insurance/update-vehicle-insurance.module').then( m => m.UpdateVehicleInsurancePageModule)
  },
  {
    path: 'vehicle-insurance-singleview',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-insurance-singleview/vehicle-insurance-singleview.module').then( m => m.VehicleInsuranceSingleviewPageModule)
  },
  {
    path: 'vehicle-leasing-singleview',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-leasing-singleview/vehicle-leasing-singleview.module').then( m => m.VehicleLeasingSingleviewPageModule)
  },
  {
    path: 'vehicle-dealer-singleview',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-dealer-singleview/vehicle-dealer-singleview.module').then( m => m.VehicleDealerSingleviewPageModule)
  },
  {
    path: 'vehicle-showroom-singleview',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-showroom-singleview/vehicle-showroom-singleview.module').then( m => m.VehicleShowroomSingleviewPageModule)
  },
  {
    path: 'vehicle-importer-singleview',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-importer-singleview/vehicle-importer-singleview.module').then( m => m.VehicleImporterSingleviewPageModule)
  },
  {
    path: 'vehicle-exporter-singleview',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-exporter-singleview/vehicle-exporter-singleview.module').then( m => m.VehicleExporterSingleviewPageModule)
  },
  {
    path: 'vehicle-driving-school-singleview',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-driving-school-singleview/vehicle-driving-school-singleview.module').then( m => m.VehicleDrivingSchoolSingleviewPageModule)
  },
  {
    path: 'vehicle-workshop-singleview',
    loadChildren: () => import('./(commercial-vehicles)/vehicle-workshop-singleview/vehicle-workshop-singleview.module').then( m => m.VehicleWorkshopSingleviewPageModule)
  },
  {
    path: 'machinery-sale-listing',
    loadChildren: () => import('./(Machinery)/machinery-sale-listing/machinery-sale-listing.module').then( m => m.MachinerySaleListingPageModule)
  },
  {
    path: 'machinery-hire-listing',
    loadChildren: () => import('./(Machinery)/machinery-hire-listing/machinery-hire-listing.module').then( m => m.MachineryHireListingPageModule)
  },
  {
    path: 'machinery-sale-singleview',
    loadChildren: () => import('./(Machinery)/machinery-sale-singleview/machinery-sale-singleview.module').then( m => m.MachinerySaleSingleviewPageModule)
  },
  {
    path: 'machinery-hire-single-view',
    loadChildren: () => import('./(Machinery)/machinery-hire-single-view/machinery-hire-single-view.module').then( m => m.MachineryHireSingleViewPageModule)
  },

  {
    path: 'machinery-insurance-listing',
    loadChildren: () => import('./(Machinery)/machinery-insurance-listing/machinery-insurance-listing.module').then( m => m.MachineryInsuranceListingPageModule)
  },
  {
    path: 'machinery-leasing-listing',
    loadChildren: () => import('./(Machinery)/machinery-leasing-listing/machinery-leasing-listing.module').then( m => m.MachineryLeasingListingPageModule)
  },
  {
    path: 'machinery-dealer-listing',
    loadChildren: () => import('./(Machinery)/machinery-dealer-listing/machinery-dealer-listing.module').then( m => m.MachineryDealerListingPageModule)
  },
  {
    path: 'machinery-showroom-listing',
    loadChildren: () => import('./(Machinery)/machinery-showroom-listing/machinery-showroom-listing.module').then( m => m.MachineryShowroomListingPageModule)
  },
  {
    path: 'machinery-exporter-listing',
    loadChildren: () => import('./(Machinery)/machinery-exporter-listing/machinery-exporter-listing.module').then( m => m.MachineryExporterListingPageModule)
  },

  {
    path: 'machinery-driving-school-listing',
    loadChildren: () => import('./(Machinery)/machinery-driving-school-listing/machinery-driving-school-listing.module').then( m => m.MachineryDrivingSchoolListingPageModule)
  },
  {
    path: 'machinery-workshop-listing',
    loadChildren: () => import('./(Machinery)/machinery-workshop-listing/machinery-workshop-listing.module').then( m => m.MachineryWorkshopListingPageModule)
  },
  {
    path: 'machinery-sale-filter',
    loadChildren: () => import('./(Machinery)/machinery-sale-filter/machinery-sale-filter.module').then( m => m.MachinerySaleFilterPageModule)
  },
  {
    path: 'machinery-hire-filter',
    loadChildren: () => import('./(Machinery)/machinery-hire-filter/machinery-hire-filter.module').then( m => m.MachineryHireFilterPageModule)
  },
  {
    path: 'machinery-dealer-filter',
    loadChildren: () => import('./(Machinery)/machinery-dealer-filter/machinery-dealer-filter.module').then( m => m.MachineryDealerFilterPageModule)
  },
  {
    path: 'machinery-driving-school-filter',
    loadChildren: () => import('./(Machinery)/machinery-driving-school-filter/machinery-driving-school-filter.module').then( m => m.MachineryDrivingSchoolFilterPageModule)
  },
  {
    path: 'machinery-exporter-filter',
    loadChildren: () => import('./(Machinery)/machinery-exporter-filter/machinery-exporter-filter.module').then( m => m.MachineryExporterFilterPageModule)
  },
  {
    path: 'machinery-insurance-filter',
    loadChildren: () => import('./(Machinery)/machinery-insurance-filter/machinery-insurance-filter.module').then( m => m.MachineryInsuranceFilterPageModule)
  },
  {
    path: 'machinery-leasing-filter',
    loadChildren: () => import('./(Machinery)/machinery-leasing-filter/machinery-leasing-filter.module').then( m => m.MachineryLeasingFilterPageModule)
  },
  {
    path: 'machinery-showroom-filter',
    loadChildren: () => import('./(Machinery)/machinery-showroom-filter/machinery-showroom-filter.module').then( m => m.MachineryShowroomFilterPageModule)
  },
  {
    path: 'machinery-workshop-filter',
    loadChildren: () => import('./(Machinery)/machinery-workshop-filter/machinery-workshop-filter.module').then( m => m.MachineryWorkshopFilterPageModule)
  },
  {
    path: 'machinery-dealer-single-view',
    loadChildren: () => import('./(Machinery)/machinery-dealer-single-view/machinery-dealer-single-view.module').then( m => m.MachineryDealerSingleViewPageModule)
  },

  {
    path: 'machinery-driving-school-single-view',
    loadChildren: () => import('./(Machinery)/machinery-driving-school-single-view/machinery-driving-school-single-view.module').then( m => m.MachineryDrivingSchoolSingleViewPageModule)
  },
  {
    path: 'machinery-exporter-single-view',
    loadChildren: () => import('./(Machinery)/machinery-exporter-single-view/machinery-exporter-single-view.module').then( m => m.MachineryExporterSingleViewPageModule)
  },
  {
    path: 'machinery-insurance-single-view',
    loadChildren: () => import('./(Machinery)/machinery-insurance-single-view/machinery-insurance-single-view.module').then( m => m.MachineryInsuranceSingleViewPageModule)
  },
  {
    path: 'machinery-leasing-single-view',
    loadChildren: () => import('./(Machinery)/machinery-leasing-single-view/machinery-leasing-single-view.module').then( m => m.MachineryLeasingSingleViewPageModule)
  },
  {
    path: 'machinery-showroom-single-view',
    loadChildren: () => import('./(Machinery)/machinery-showroom-single-view/machinery-showroom-single-view.module').then( m => m.MachineryShowroomSingleViewPageModule)
  },
  {
    path: 'machinery-workshop-single-view',
    loadChildren: () => import('./(Machinery)/machinery-workshop-single-view/machinery-workshop-single-view.module').then( m => m.MachineryWorkshopSingleViewPageModule)
  },
  {
    path: 'machinery-importer-listing',
    loadChildren: () => import('./(Machinery)/machinery-importer-listing/machinery-importer-listing.module').then( m => m.MachineryImporterListingPageModule)
  },
  {
    path: 'machinery-importer-filter',
    loadChildren: () => import('./(Machinery)/machinery-importer-filter/machinery-importer-filter.module').then( m => m.MachineryImporterFilterPageModule)
  },
  {
    path: 'machinery-importer-singleview',
    loadChildren: () => import('./(Machinery)/machinery-importer-singleview/machinery-importer-singleview.module').then( m => m.MachineryImporterSingleviewPageModule)
  },
  {
    path: 'machinery-you-posted',
    loadChildren: () => import('./(Machinery)/machinery-you-posted/machinery-you-posted.module').then( m => m.MachineryYouPostedPageModule)
  },
  {
    path: 'machinery-buseness',
    loadChildren: () => import('./(Machinery)/machinery-buseness/machinery-buseness.module').then( m => m.MachineryBusenessPageModule)
  },
  {
    path: 'post-machinery-sale',
    loadChildren: () => import('./(Machinery)/post-machinery-sale/post-machinery-sale.module').then( m => m.PostMachinerySalePageModule)
  },
  {
    path: 'post-machinery-hire',
    loadChildren: () => import('./(Machinery)/post-machinery-hire/post-machinery-hire.module').then( m => m.PostMachineryHirePageModule)
  },
  {
    path: 'post-machinery-showroom',
    loadChildren: () => import('./(Machinery)/post-machinery-showroom/post-machinery-showroom.module').then( m => m.PostMachineryShowroomPageModule)
  },
  {
    path: 'post-machinery-dealer',
    loadChildren: () => import('./(Machinery)/post-machinery-dealer/post-machinery-dealer.module').then( m => m.PostMachineryDealerPageModule)
  },
  {
    path: 'post-machinery-workshop',
    loadChildren: () => import('./(Machinery)/post-machinery-workshop/post-machinery-workshop.module').then( m => m.PostMachineryWorkshopPageModule)
  },
  {
    path: 'post-machinery-importer',
    loadChildren: () => import('./(Machinery)/post-machinery-importer/post-machinery-importer.module').then( m => m.PostMachineryImporterPageModule)
  },
  {
    path: 'post-machinery-exporter',
    loadChildren: () => import('./(Machinery)/post-machinery-exporter/post-machinery-exporter.module').then( m => m.PostMachineryExporterPageModule)
  },
  {
    path: 'post-machinery-insurance',
    loadChildren: () => import('./(Machinery)/post-machinery-insurance/post-machinery-insurance.module').then( m => m.PostMachineryInsurancePageModule)
  },
  {
    path: 'post-machinery-leasing',
    loadChildren: () => import('./(Machinery)/post-machinery-leasing/post-machinery-leasing.module').then( m => m.PostMachineryLeasingPageModule)
  },
  {
    path: 'update-machinery-sale',
    loadChildren: () => import('./(Machinery)/update-machinery-sale/update-machinery-sale.module').then( m => m.UpdateMachinerySalePageModule)
  },
  {
    path: 'update-machinery-hire',
    loadChildren: () => import('./(Machinery)/update-machinery-hire/update-machinery-hire.module').then( m => m.UpdateMachineryHirePageModule)
  },
  {
    path: 'update-machinery-dealer',
    loadChildren: () => import('./(Machinery)/update-machinery-dealer/update-machinery-dealer.module').then( m => m.UpdateMachineryDealerPageModule)
  },
  {
    path: 'update-machinery-exporter',
    loadChildren: () => import('./(Machinery)/update-machinery-exporter/update-machinery-exporter.module').then( m => m.UpdateMachineryExporterPageModule)
  },
  {
    path: 'update-machinery-importer',
    loadChildren: () => import('./(Machinery)/update-machinery-importer/update-machinery-importer.module').then( m => m.UpdateMachineryImporterPageModule)
  },
  {
    path: 'update-machinery-insurance',
    loadChildren: () => import('./(Machinery)/update-machinery-insurance/update-machinery-insurance.module').then( m => m.UpdateMachineryInsurancePageModule)
  },
  {
    path: 'update-machinery-leasing',
    loadChildren: () => import('./(Machinery)/update-machinery-leasing/update-machinery-leasing.module').then( m => m.UpdateMachineryLeasingPageModule)
  },
  {
    path: 'update-machinery-showroom',
    loadChildren: () => import('./(Machinery)/update-machinery-showroom/update-machinery-showroom.module').then( m => m.UpdateMachineryShowroomPageModule)
  },
  {
    path: 'update-machinery-workshop',
    loadChildren: () => import('./(Machinery)/update-machinery-workshop/update-machinery-workshop.module').then( m => m.UpdateMachineryWorkshopPageModule)
  },
  {
    path: 'update-machinery-driving-school',
    loadChildren: () => import('./(Machinery)/update-machinery-driving-school/update-machinery-driving-school.module').then( m => m.UpdateMachineryDrivingSchoolPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
