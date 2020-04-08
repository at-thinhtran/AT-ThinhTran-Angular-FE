import { NgModule } from '@angular/core';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    NewsRoutingModule
  ],
  providers: [],
  bootstrap: [NewsComponent]
})
export class NewsModule { }
