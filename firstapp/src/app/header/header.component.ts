import { Component } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CardComponent],
})
export class HeaderComponent {}
