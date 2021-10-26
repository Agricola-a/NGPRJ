import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Project } from '@app/models/Project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'ngprj-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project$!: Observable<Project>;

  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.project$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => this.projectService.get(+params.get('id')!))
    )
  }
  updateProjectFromForm(project: Project){
    const id = this.activatedRoute.snapshot.params.id;
    this.projectService.patchFromForm(project, id).subscribe(() => this.project$ = this.projectService.get(id))
  }
}
