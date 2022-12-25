import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogeadoPageRoutingModule } from './logeado-routing.module';

import { LogeadoPage } from './logeado.page';
import {MenuPageModule} from "../menu/menu.module";
import {NavscanPageModule} from "../pages/navscan/navscan.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LogeadoPageRoutingModule,
        MenuPageModule,
        NavscanPageModule
    ],
  declarations: [LogeadoPage]
})
export class LogeadoPageModule {}
