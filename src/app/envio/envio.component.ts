import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../services/peticiones.service";
import {Envio} from "../models/envio.model";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.scss'],
})
export class EnvioComponent implements OnInit {
  model: Envio = {DIRECCION_ENVIO: '', REGION_ENVIO: '', ID_ENVIO: this.getRandomInt(0, 99999)}
  public envio: any;

  constructor(private peticionesService: PeticionesService, public alert: AlertController) {
  }

  ngOnInit() {
    this.peticionesService.getEnvio().subscribe(result => {
      console.log(result);
      this.envio = result.Items;
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

  agregarEnvio() {
    console.log(this.model);

    this.peticionesService.addEnvio(JSON.stringify(this.model)).subscribe((response:Envio) => {
      console.log(response);
      if (this.model.REGION_ENVIO == ""){
        this.showAlert("ERROR", "No pueden quedar campos vacíos")
      }else{
        this.showAlert("Envío Agregado", this.model.DIRECCION_ENVIO);
      }
    }, error => {})
  }
}
