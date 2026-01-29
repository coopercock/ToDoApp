import { Component, signal } from '@angular/core';
import { Teaser } from '../shared/components/teaser/teaser';
import { MainButton } from "../shared/components/main-button/main-button";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [Teaser, MainButton],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  teaser = signal<string>("My Tasks Application");
}