import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {
  lat: number;
  lng: number;

  constructor(private route: ActivatedRoute) {
    this.lat = 0;
    this.lng = 0;
  }

  ngOnInit() {
    let geo: any = this.route.snapshot.paramMap.get('geo');
    geo = geo.substr(4);
    geo = geo.split(',');

    this.lat = Number(geo[0]);
    this.lng = Number(geo[1]);

    console.log(this.lat, this.lng)
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmNhbmFsZXMiLCJhIjoiY2xjMmc2dmFxMXU1ZjNucGppdXdlcnJwbSJ9.MPOrPjj7YfGNL6Xuj9AGVw';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      center: [this.lng, this.lat], // starting position [lng, lat]
      zoom: 13, // starting zoom
      style: 'mapbox://styles/mapbox/streets-v11', // style URL or style object
      hash: true, // sync `center`, `zoom`, `pitch`, and `bearing` with URL
    });
  }

}
