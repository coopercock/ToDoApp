import { Component, signal } from '@angular/core';
import { Teaser } from '../shared/components/teaser/teaser';
import { MainButton } from '../shared/components/main-button/main-button';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-filter',
  imports: [Teaser, MainButton],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})

export class Filter {
  teaser = signal<string>('Filter Controls:');
  
  constructor(public taskService: TaskService) {}
  
  filterCompleteTask() {
    this.taskService.filterCompleteTasks();
  }
  
  filterIncompleteTask() {
    this.taskService.filterIncompleteTasks();
  }
}