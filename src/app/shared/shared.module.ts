import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HttpLoaderComponent } from './component/http-loader/http-loader.component';
import { SimpleLayoutComponent } from './layout/simple-layout/simple-layout.component';
import { SimpleLayoutHeaderComponent } from './layout/simple-layout/simple-layout-header/simple-layout-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from 'src/app/shared/modules/material-module';
import {MatIconModule} from '@angular/material/icon';
import { SimpleLayoutSidebarComponent } from './layout/simple-layout/simple-layout-sidebar/simple-layout-sidebar.component';
import { MenuListItemComponent } from './layout/simple-layout/menu-list-item/menu-list-item.component';

@NgModule({
  declarations: [
    SimpleLayoutComponent,
    SimpleLayoutHeaderComponent,
    HttpLoaderComponent,
    SimpleLayoutSidebarComponent,
    MenuListItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    DemoMaterialModule,
    MatIconModule
  ],
  exports: [
    HttpLoaderComponent
  ]
})
export class SharedModule { }
