import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartsAndAccesoriesService } from 'src/app/(services)/parts-and-accesories.service';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.page.html',
  styleUrls: ['./my-store.page.scss'],
  standalone: false,
})
export class MyStorePage implements OnInit {
  store: any = null;

  constructor(public router: Router, private http: HttpClient, private partsAndAceesories:PartsAndAccesoriesService,    private route: ActivatedRoute) {}

  ngOnInit() {
    this.getStoreData();
    const storeId = this.route.snapshot.queryParamMap.get('storeId');
    console.log('storeId from queryParams:', storeId);
  }

  back() {
    history.back();
  }

 getStoreData() {
  const userId = localStorage.getItem('userId');
console.log(userId)
  if (!userId) return;

  this.partsAndAceesories.getStore(userId).subscribe({
    next: (res) => {
      if (res.success && res.store) {
        this.store = res.store;
      } else {
        this.store = null;
      }
    },
    error: (err) => {
      console.error('Error fetching store:', err);
      this.store = null;
    }
  });
}

goToMyProducts() {
  this.router.navigate(['/my-products'], { queryParams: { storeId: this.store.id } });
  console.log(this.store.id)
}

  goToCreateStore() {
    this.router.navigate(['/create-store']);
  }

 goToEditStore() {
  if (this.store?.id) {
    this.router.navigate(['/edit-store', this.store.id]);
  }
}

}
