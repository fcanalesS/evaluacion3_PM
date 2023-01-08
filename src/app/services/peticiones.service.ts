import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Producto} from "../models/producto.model";
import {Cliente} from "../models/cliente.model";
import {Envio} from "../models/envio.model";

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  public url: string;
  constructor(public  http: HttpClient) {
    this.url = "https://53dp3ng0fk.execute-api.us-east-1.amazonaws.com/produccion/";
  }

  // @ts-ignore
  addProductos(producto): Observable<Producto>{
    return this.http.post<Producto>(this.url + 'api-productos/productos/add-producto', producto)
  }

  getProductos(): Observable<any>{
    return this.http.get(this.url + 'api-productos/productos/get-producto');
  }

  getEnvio(): Observable<any>{
    return this.http.get(this.url + 'api-productos/productos/get-envio');
  }

  getCliente(): Observable<any>{
    return this.http.get(this.url + 'api-productos/productos/get-cliente')
  }

  // @ts-ignore
  addEnvio(envio): Observable<Envio> {
    return this.http.post<Envio>(this.url + 'api-productos/productos/add-envio', envio);
  }

  // @ts-ignore
  addCliente(cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.url + 'api-productos/productos/add-cliente', cliente);
  }
}
