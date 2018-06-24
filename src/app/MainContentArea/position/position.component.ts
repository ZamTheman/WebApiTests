import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit, OnDestroy {
  lat: string;
  long: string;
  accuracy: string;
  timeStamp: string;

  constructor() { }

  ngOnInit() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setPositionInfo(position);
        }, (error) => {
          console.log(error);
      });
    }
  }

  setPositionInfo(position) {
    this.lat = position.coords.latitude;
    this.long = position.coords.longitude;
    this.accuracy = position.coords.accuracy;
    this.timeStamp = new Date(position.timestamp).toLocaleTimeString();
  }

  ngOnDestroy() {
  }
}
