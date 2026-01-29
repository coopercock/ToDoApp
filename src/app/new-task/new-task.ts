import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { MainButton } from "../shared/components/main-button/main-button";
import { Teaser } from "../shared/components/teaser/teaser";
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-new-task',
  imports: [MainButton, Teaser],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  taskService = inject(TaskService);
  teaser = signal<string>("Add a new Task");
  taskInput = viewChild<ElementRef<HTMLInputElement>>('taskInput');


  addTask() {
    const taskName = this.taskInput()!.nativeElement.value;
    this.taskService.addTask(taskName);
    this.taskInput()!.nativeElement.value = '';
  }
}
