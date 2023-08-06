import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  toggleNavbar() {
    const navbarCollapse = document.querySelector('#navbarSupportedContent') as HTMLElement;
    if (navbarCollapse) {
      navbarCollapse.classList.toggle('show');
    }
  }

  hideMobileMenu() {
    const navbarCollapse = document.querySelector('#navbarSupportedContent') as HTMLElement;
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }

}
