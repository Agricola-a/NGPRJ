import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/modules/dashboard/pages/home/home.component';
import { PageNotFoundComponent } from '@app/page-not-found/page-not-found.component';
import { AuthGuard } from '@app/core/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'projects',
    loadChildren: () =>
      import('./modules/project/project.module').then((m) => m.ProjectModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
