import { NgModule } from "@angular/core"
import {ProjectDashboardComponent} from "@app/modules/project/pages/project-dashboard/project-dashboard.component";
import {ProjectListComponent} from "@app/modules/project/components/project-list/project-list.component";
import {ProjectDetailComponent} from "@app/modules/project/pages/project-detail/project-detail.component";
import {ProjectFormComponent} from "@app/modules/project/components/project-form/project-form.component";
import {SharedModule} from "@app/shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProjectRoutingModule} from "@app/modules/project/project-routing.module";
import { ProjectComponent } from './pages/project.component';
import { ProjectFormRfComponent } from './components/project-form-rf/project-form-rf.component';

@NgModule({
  declarations: [
    ProjectDashboardComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectFormComponent,
    ProjectFormRfComponent,
    ProjectComponent,
    ProjectFormRfComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectRoutingModule
  ],
  exports: [
    ProjectComponent
  ]
})

export class ProjectModule {}
