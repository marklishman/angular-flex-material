import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  lat = 53.744366;
  lng = -2.612968;

  markers: Marker[] = [
    {
      lat: 53.744366,
      lng: -2.712968,
      label: 'A'
    },
    {
      lat: 53.731042,
      lng: -2.526273,
      label: 'B'
    }
  ];

  zoom = 12;

  mapClicked(event: MouseEvent) {
    console.log(`lat: ${event.coords.lat}, long: ${event.coords.lng}`);
  }

  clickedMarker(label: string) {
    console.log(`clicked the marker: ${label}`);
  }

  onCircleRadiusChange(radius: number) {
    console.log(radius);
  }

  pointInCircle(point, radius, center) {
    return (google.maps.geometry.spherical.computeDistanceBetween(point, center) <= radius);
  }

}
