import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <div class="main-body">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class LayoutComponent {}
