import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onBack() {
    this.router.navigate(['home']);
  }

  onParam() {
    this.router.navigate(['/news'], { queryParams: { page: 1 } });
  }
}
