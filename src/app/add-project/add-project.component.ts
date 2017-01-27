import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ProjectService]
})
export class AddProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string, fundsrequested: number, goal: string) {
    var newProject: Project = new Project(title, fundsrequested, goal);
    this.projectService.addProject(newProject);
  }
}
