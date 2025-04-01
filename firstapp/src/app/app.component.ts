import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component'; 


@Component({
  selector: 'app-ar',
  imports: [HeaderComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';


  showMessage = true;
}
