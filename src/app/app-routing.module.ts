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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
