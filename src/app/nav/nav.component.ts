import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    FormsModule,
    BsDropdownModule,
    
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit{
  accountService = inject(AccountService);
  model: any = {};

  ngOnInit(): void {
    console.log('Tôi chạy sau và xét currentUser= ', this.accountService.currentUser());
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {

      },
      error: (err) => {
        console.error(err); 
      }, 
      complete: () => {
        console.log('Đăng nhập thành công')
      }
    });
  }

  logout() {
    this.accountService.logout();
  }
}
