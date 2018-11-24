import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TableComponent } from './table/table.component';

export const uiKitRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TableComponent]
})
export class UiKitModule {}
