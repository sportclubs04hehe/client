import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  http = inject(HttpClient);
  private accountService = inject(AccountService);
  users: any;
  
  ngOnInit(): void {
    this.getAllUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const currentUser = JSON.parse(userString);
    this.accountService.currentUser.set(currentUser);
    console.log('Tôi xét currentUser', currentUser);
    
  }

  getAllUsers() {
    this.http.get('https://localhost:7022/api/Users').subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => console.error(error),
      complete: () => {
        console.log('Đã lấy tất cả Users');
      },
    })
  }
}
