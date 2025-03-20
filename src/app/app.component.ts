import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Location } from '@angular/common';
import { Platform } from '@ionic/angular'; // Import Platform
import { StatusBar, Style } from '@capacitor/status-bar'; // Import StatusBar from Capacitor
register();
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: false
})

export class AppComponent {
  loadingController: any;
  router: any;
  constructor(private platform: Platform) {
    this.initializeApp();
 
}


initializeApp() {
  StatusBar.setOverlaysWebView({ overlay: false});
  this.platform.ready().then(() => {
    // Set initial status bar overlay configuration
    StatusBar.setOverlaysWebView({ overlay: false });

    // Detect the initial color scheme preference of the user (Dark or Light Mode)
    this.setStatusBarStyle();

    // Listen for system color scheme preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      this.setStatusBarStyle();
    });
  });
}

setStatusBarStyle() {
  // Check if the user prefers dark mode
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set the status bar style based on the color scheme
  if (prefersDark) {
    // Dark mode detected, set the status bar to dark
    StatusBar.setStyle({ style: Style.Dark });
  } else {
    // Light mode detected, set the status bar to light
    StatusBar.setStyle({ style: Style.Dark });
  }
}


}

