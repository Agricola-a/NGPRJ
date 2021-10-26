import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@app/models/Project';
import { Observable } from 'rxjs';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'ngprj-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css'],
})
export class ProjectDashboardComponent implements OnInit {

  projects$!: Observable<Project[]>;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.getAll();
  }

  selectProject(project: Project) {
    this.router.navigate(['/projects', 'detail', project.id])
  }
  eraseProject(project: Project) {
    this.projectService.erase(project.id).subscribe(() => this.projects$ = this.projectService.getAll());
  }

  submitProjectForm(project: Project) {
    this.projectService.add(project).subscribe((data) => {
      this.projects$ = this.projectService.getAll();
      this.router.navigate(['/projects', 'detail', data.id])
    });
    console.log('aaaaaaaaa');
  }
}
