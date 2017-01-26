import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService]
})

export class HomeComponent implements OnInit {
  projects: Project[];

  constructor(private router: Router, private projectService: ProjectService) {}


  ngOnInit(){
    this.projects = this.projectService.getProjects();
  }

  projectDetails(clickedProject: Project) {
    this.router.navigate(['projects', clickedProject.id]);
  }
}
