import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ProductoComponent} from "./producto/producto.component";
import {ClienteComponent} from "./cliente/cliente.component";
import {EnvioComponent} from "./envio/envio.component";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'producto', component: ProductoComponent
  },
  {
    path: 'cliente', component: ClienteComponent
  },
  {
    path: 'envio', component: EnvioComponent
  },
  {
    path: 'logeado',
    loadChildren: () => import('./logeado/logeado.module').then( m => m.LogeadoPageModule)
  },
  {
    path: 'navscan',
    loadChildren: () => import('./pages/navscan/navscan.module').then( m => m.NavscanPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
