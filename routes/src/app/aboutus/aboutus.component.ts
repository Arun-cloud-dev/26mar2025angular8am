import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aboutus',
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
})
export class AboutusComponent {

  constructor(private router: Router) {

  }

  navigatetoAdmin() {
    this.router.navigateByUrl('/admin');
  }
}

