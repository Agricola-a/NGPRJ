import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProjectContainerComponent } from './project/project-container/project-container.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectFormComponent } from './project/project-form/project-form.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { SectionHeaderComponent } from './shared/section-header/section-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectContainerComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectFormComponent,
    HomeComponent,
    NavbarComponent,
    SectionHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
