import { Component, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class Homepage implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}

@NgModule({
  imports: [MatButtonModule, RouterModule],
  exports: [Homepage],
  declarations: [Homepage],
})
export class HomepageModule {
}
