import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile-upgrade-hotspot',
    templateUrl: './profile-upgrade-hotspot.page.html',
    styleUrls: ['./profile-upgrade-hotspot.page.scss'],
    standalone: false
})
export class ProfileUpgradeHotspotPage implements OnInit {
  selectedValue: string | undefined;

  constructor(public router: Router) {}

  ngOnInit() {

  }
  back(){
    window.history.back();
  }

}
