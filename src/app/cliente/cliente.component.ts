import { Component, OnInit } from '@angular/core';
import {PeticionesService} from "../services/peticiones.service";
import {Cliente} from "../models/cliente.model";
import {AlertController} from "@ionic/angular";
import {Envio} from "../models/envio.model";


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  model: Cliente = { ID_CLIENTE:  this.getRandomInt(0, 99999), NOMBRE_CLIENTE: '', RUT_CLIENTE: ''}
  public cliente: any;
  constructor(private peticionesService: PeticionesService, public alert:AlertController) { }

  ngOnInit() {
    this.peticionesService.getCliente().subscribe(result => {
      console.log(result);
      this.cliente = result.Items;
    }, error => {
      console.log(<any>error)
    });
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

  agregarCiente() {
    console.log(this.model);

    this.peticionesService.addCliente(JSON.stringify(this.model)).subscribe((response:Cliente) => {
      console.log(response);
      if (this.model.NOMBRE_CLIENTE == ""){
        this.showAlert("ERROR", "No pueden quedar campos vacíos")
      }else{
        this.showAlert("Envío Agregado", this.model.NOMBRE_CLIENTE);
      }
    }, error => {})
  }
}
