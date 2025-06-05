import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'parts-and',
    loadComponent: () => import('src/app/(parts-and-accesories)/parts-and/parts-and.page').then((m) => m.PartsAndPage),
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./(parts-and-accesories)/product-detail/product-detail-routing.module').then(m => m.ProductDetailPageRoutingModule)
  }
]; 