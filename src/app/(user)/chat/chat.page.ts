import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone:false,
})
export class ChatPage implements OnInit {
activeTab = 'home';
  constructor(
     private router: Router,
  ) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.activeTab = 'home';
    this.router.navigate(['/home']); // Update with your home route
  }

  navigateToChat() {
    this.activeTab = 'chat';
    this.router.navigate(['/chat']); // Update with your chat route
  }

  navigateToProfile() {
    this.activeTab = 'profile';
    this.router.navigate(['/account-prof-busines']); // Update with your profile route
  }
}
