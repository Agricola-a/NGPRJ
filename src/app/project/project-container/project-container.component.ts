import { Component, OnInit } from '@angular/core';
import { Project } from '@app/models/Project';
import { Observable } from 'rxjs';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css'],
})
export class ProjectContainerComponent implements OnInit {

  projects$!: Observable<Project[]>;
  selectedProject!: Project;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.getAll();
  }

  selectProject(project: Project) {
    this.projectService.get(project.id).subscribe(data => this.selectedProject = data);
  }
  eraseProject(project: Project) {
    this.projectService.erase(project.id).subscribe(() => this.projects$ = this.projectService.getAll());
  }

  submitProjectForm(project: Project) {
    this.projectService.add(project).subscribe(() => this.projects$ = this.projectService.getAll());
  }
}
