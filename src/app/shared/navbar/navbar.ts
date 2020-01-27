import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBar {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      `icon_github`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/github-circle-white-transparent.svg')
    );
  }
}

@NgModule({
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [NavBar],
  declarations: [NavBar],
})
export class NavBarModule {
}
