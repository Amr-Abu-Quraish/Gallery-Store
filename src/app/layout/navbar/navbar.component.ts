import { Component, inject, input, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],

templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent{



  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHomePage = this.router.url === '/home';
    });
  }


  isScrolled = false;
  isHomePage = false;





  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isHomePage) {
      this.isScrolled = window.scrollY > 590;
    }
  }
}


