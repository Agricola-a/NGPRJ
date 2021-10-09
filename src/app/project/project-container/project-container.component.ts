import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from '@app/models/Project';
import { Subscription } from 'rxjs';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css'],
})
export class ProjectContainerComponent implements OnInit, OnDestroy {

  subscription!: Subscription; //to use unsubscribe
  selectedProject!: Project;

  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.subscription = this.projectService.getAll()
    .subscribe(data => this.projects = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); //using unsubscribe
  }

  selectProject(project: Project) {
    this.selectedProject = this.projectService.get(project.id);
  }

  submitProjectForm(project: Project) {
    this.projectService.add(project);
  }
}
