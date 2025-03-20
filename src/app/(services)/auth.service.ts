import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userIDSubject = new BehaviorSubject<string | null>(sessionStorage.getItem('userId'));
  userID$ = this.userIDSubject.asObservable();
  constructor() { }
  setUserSession(userID: string): void {
    // Store userId in sessionStorage
    sessionStorage.setItem('userId', userID);

    // Update the BehaviorSubject to notify subscribers
    this.userIDSubject.next(userID);
  }

  // Method to clear user session
  clearSession(): void {
    sessionStorage.removeItem('userId');
    this.userIDSubject.next(null); // Clear the BehaviorSubject value
  }

  // Method to get the current userId
  getUserId(): string | null {
    return sessionStorage.getItem('userId');
  }
}
