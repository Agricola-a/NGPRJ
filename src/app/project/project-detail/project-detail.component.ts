import { Component, Input, OnInit } from '@angular/core';
import { Project } from '@app/models/Project';

@Component({
  selector: 'ngprj-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project!: Project;

  constructor() {
   }

  ngOnInit(): void {
  }

}
