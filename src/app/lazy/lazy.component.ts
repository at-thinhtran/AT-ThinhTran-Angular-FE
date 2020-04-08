import { Component, OnInit } from '@angular/core';
import { ApiService , ENDPOINT} from '../service/api/api.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  data: any;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getAssets('./assets/datadummy.json').subscribe(e => {
      this.data = e;
      console.log(e);
    }, err => {
      console.log(err);
    });
  }

}
