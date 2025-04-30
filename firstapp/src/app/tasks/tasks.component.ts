import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type NewTaskData } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;  
  private tasksService = new TasksService();



  
  get selectedUserTasks() {
    
  }
  onCompleteTask(id: string) {
    
  }
  onStartAddTask(){
    this.isAddingTask = true
  }


  onCancelAddTask() { 
    this.isAddingTask = false
  }

  onAddTask(taskData: NewTaskData) {
 
    this.isAddingTask = false;
  }
}
