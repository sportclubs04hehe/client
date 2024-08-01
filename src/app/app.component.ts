import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  http = inject(HttpClient);
  users: any;
  
  ngOnInit(): void {
    this.http.get('https://localhost:7022/api/Users').subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => console.error(error),
      complete: () => {
        console.log('Kết nối thành công');
        
      },
    })
  }
}
