import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  @ViewChild('videoElement') videoElement: any;
  video: any;
  userAgent: any;

  constructor() { }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;

    const browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia({ video: true }).then(stream => {
      this.video.srcObject = stream;
      this.video.play();
    });
  }

}
