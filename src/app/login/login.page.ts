import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {alert} from "ionicons/icons";
import {user} from "@angular/fire/auth";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AlertController} from "@ionic/angular";
import {FirebaseError} from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";

  constructor(public afAuth: AngularFireAuth, public alert: AlertController, public route: Router) {
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Aceptar"]
    })

    await alert.present();
  }

  ngOnInit() {
  }

  async iniciarSesion() {
    const {username, password} = this;
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(username, password);
      console.log(res);
      await this.route.navigate(['logeado'])
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/invalid-email") await this.showAlert("Error", "El nombre de usuario o contraseña es incorrecto");
        if (error.code === "auth/user-not-found") await this.showAlert("Error", "El usuario ingresado no existe");
      }


    }
  }
}
