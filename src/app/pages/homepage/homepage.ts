import { Component, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";

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
  imports: [MatButtonModule, RouterModule, FlexLayoutModule, MatIconModule],
  exports: [Homepage],
  declarations: [Homepage],
})
export class HomepageModule {
}
