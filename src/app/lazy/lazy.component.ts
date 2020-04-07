import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from '../service/api/api.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  data: any;
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.get(ENDPOINT.users, { page: 2 }).subscribe(e => {
      console.log(e)
      this.data = e.data
      console.log("LazyComponent -> ngOnInit -> e.data", e.data)
    })
  }

}
