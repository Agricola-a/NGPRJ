import { NgModule } from "@angular/core";
import {HomeComponent} from "@app/modules/dashboard/pages/home/home.component";
import {SharedModule} from "@app/shared/shared.module";
import {DashboardRoutingModule} from "@app/modules/dashboard/dashboard-routing.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ]
})

export class DashboardModule {}
