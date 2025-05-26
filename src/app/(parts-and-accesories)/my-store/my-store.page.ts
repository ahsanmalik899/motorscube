import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.page.html',
  styleUrls: ['./my-store.page.scss'],
  standalone:false,
})
export class MyStorePage implements OnInit {
store: any = null;
  constructor(  public router: Router,) { }

  ngOnInit() {
    this.getStoreData();
  }
back(){
  history.back()
}
getStoreData() {
  // Replace this logic with your actual fetch from backend
  // For now, simulate existing or non-existing store
  const storeFromBackend = null; // or your store object

  if (storeFromBackend) {
    this.store = storeFromBackend;
  }
}
  
goToCreateStore() {
  this.router.navigate(['/create-store']);
}

goToEditStore() {
  this.router.navigate(['/edit-store']);
}
}
