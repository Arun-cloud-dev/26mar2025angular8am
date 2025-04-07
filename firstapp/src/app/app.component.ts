import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component'; 
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-ar',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;

  onSelectUser(id:string) {
    console.log('Selected user: ' + id);
   }
}
