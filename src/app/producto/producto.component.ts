import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../services/peticiones.service";
import {Producto} from "../models/producto.model";
import {AlertController} from "@ionic/angular";

import {JsonPipe} from "@angular/common";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  model: Producto = {STOCK: 0, CODIGO_PRODUCTO: 0, ID_PRODUCTO: this.getRandomInt(0, 99999), NOMBRE_PRODUCTO: '', CAPACIDAD: ''}
  public producto: any;

  constructor(private peticionesService: PeticionesService, public alert: AlertController) {
  }

  ngOnInit() {
    this.peticionesService.getProductos().subscribe(result => {
        console.log(result);
        this.producto = result.Items;
      },
      error => {
        console.log(<any>error)
      });
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['ok']
    });
    await alert.present();
    setTimeout(location.reload.bind(location), 1000);
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  agregarProducto() {
    console.log(this.model);

    this.peticionesService.addProductos(JSON.stringify(this.model)).subscribe(
      (response: Producto) => {
        console.log(response);
        if (this.model.NOMBRE_PRODUCTO == "") {
          this.showAlert("ERROR", "No pueden quedar campos vacíos")
        } else {
          this.showAlert("Producto Agregado", this.model.NOMBRE_PRODUCTO);
        }
      }
    )
  }
}
