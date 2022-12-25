import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";
import {alert} from "ionicons/icons";
import {user} from "@angular/fire/auth";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  username: string = "";
  password: string = "";
  cpassword: string = "";
  constructor(public afAuth: AngularFireAuth, public alert: AlertController, public route: Router) {}

  ngOnInit() {
  }

  async showAlert(header: string, message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Aceptar"]
    })

    await alert.present();
  }

  async registrar() {
    const { username, password, cpassword } = this;
    if (password != cpassword){
      await this.showAlert("Error", "Las contraseñas ingresadas no corresponden");
    }else{
      try {
        const res = await this.afAuth.createUserWithEmailAndPassword(username, password);
        console.log(res);
        await this.showAlert("Usuario registrado", "Bienvenido usuario: " + username);
        await this.route.navigate(["login"]);
      }catch (err) {
        console.dir(err);
        await this.showAlert("ERROR", "Error al registrar el usuario")
      }
    }
  }
}
