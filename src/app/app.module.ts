import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebaseConfig from "./firebase";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import {Storage} from "@ionic/storage";
import {InAppBrowser} from "@ionic-native/in-app-browser/ngx";
import {ProductoComponent} from "./producto/producto.component";
import {FormsModule} from "@angular/forms";
import {PeticionesService} from "./services/peticiones.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {EnvioComponent} from "./envio/envio.component";
import {ClienteComponent} from "./cliente/cliente.component";


@NgModule({
  declarations: [AppComponent, ProductoComponent, EnvioComponent, ClienteComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFireModule, FormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, BarcodeScanner, Storage, InAppBrowser, PeticionesService, HttpClient, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
