import { NgModule } from '@angular/core';
import { SectionHeaderComponent } from '@app/shared/components/section-header/section-header.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    SectionHeaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SectionHeaderComponent,
    CardComponent
  ]
})
export class SharedModule {}
