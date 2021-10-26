import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import {ProjectDetailComponent} from "@app/modules/project/pages/project-detail/project-detail.component";
import {ProjectDashboardComponent} from "@app/modules/project/pages/project-dashboard/project-dashboard.component";
import {ProjectComponent} from "@app/modules/project/pages/project.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      { path: 'detail/:id', component: ProjectDetailComponent },
      { path: '', component: ProjectDashboardComponent }
    ]
  }
  /*{path: 'notfound', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/notfound'}*/
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProjectRoutingModule {}
