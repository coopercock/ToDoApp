import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Filter } from './filter/filter';
import { Header } from './header/header';
import { Teaser } from "./shared/components/teaser/teaser";
import { NewTask } from "./new-task/new-task";
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [Header, Filter, Teaser, NewTask, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todoapp');
}
