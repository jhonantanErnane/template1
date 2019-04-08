import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideMenuRoutingModule } from './side-menu-routing.module';
import { SideMenuPage } from './side-menu/side-menu.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    SideMenuPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    SideMenuRoutingModule
  ]
})
export class SideMenuModule { }
