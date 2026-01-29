import { Component, signal } from '@angular/core';
import { Teaser } from "../shared/components/teaser/teaser";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Teaser],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  teaser = signal<string>("My Tasks Application");
}
