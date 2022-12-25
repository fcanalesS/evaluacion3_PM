import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import {HomePageModule} from "../home/home.module";
import {Routes} from "@angular/router";
import {NavscanPageModule} from "../pages/navscan/navscan.module";
import {ScanPageModule} from "../pages/scan/scan.module";
import {HistorialScanPageModule} from "../pages/historial-scan/historial-scan.module";

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    NavscanPageModule,
    HistorialScanPageModule,

  ],
  exports: [MenuPage],
  declarations: [MenuPage]
})
export class MenuPageModule {}
