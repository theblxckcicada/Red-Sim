import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  standalone: false,
  selector: 'app-root',
  template: `
    <div class=" h-screen  w-full">
      <div class="container ">
        <header>
          <div class="logo cursor-pointer" >
            <a routerLink="/" class="text-xl md:text-3xl">RED <span>TEAM</span> SIM</a>
          </div>
          <nav>
            <ul>
              <li><a href="/scenario" class="cursor-pointer">New Scenario</a></li>
            </ul>
          </nav>
        </header>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [``],
})
export class AppComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor(private router: Router) {}
}
