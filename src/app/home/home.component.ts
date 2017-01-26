import { Component } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  projects: Project[] = [
    new Project("WorldTravel", 300, "travel all over the world", 1),
    new Project("WorldTravel2222", 600, "2222travel all over the world", 2)
  ];
}
