import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first angular app!';
  nombre = 'Santiago';
  lat: number = 6.27053;
  lng: number = -75.57211999999998;
  public coordinates: Coordinate[] = [];

  ngOnInit() {
    var id, options;

    var coordinates = this.coordinates;

    function success(pos) {
      var crd = pos.coords;

      coordinates.push(new Coordinate(crd.latitude, crd.longitude));
      console.log(crd.longitude + ' ' + crd.latitude);
    }

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }

    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    id = navigator.geolocation.watchPosition(success, error, options);
  }
}
export class Coordinate {
  latitude: number;
  longitude: number;

  constructor(lat, lng) {
      this.latitude = lat;
      this.longitude = lng;
  }
}