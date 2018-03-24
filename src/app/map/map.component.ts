import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat = 53.744366;
  lng = -2.712968;

  constructor() { }

  ngOnInit() {
  }

}
