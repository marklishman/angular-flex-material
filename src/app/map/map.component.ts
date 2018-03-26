import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AgmCircle, AgmMarker, MapsAPILoader, MouseEvent } from '@agm/core';
import { MatSnackBar } from '@angular/material';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  lat = 53.744366;
  lng = -2.612968;

  markers: Marker[] = [
    {
      lat: 53.731042,
      lng: -2.526273,
      label: 'A'
    }
  ];

  zoom = 12;

  @ViewChild(AgmCircle) circle: AgmCircle;
  @ViewChild(AgmCircle) marker: AgmMarker;

  constructor(private mapsApiLoader: MapsAPILoader,
              public snackBar: MatSnackBar) {}

  ngAfterViewInit(): void {
    this.mapsApiLoader.load().then(() => {
      console.log('Loaded');
    });
  }

  mapClicked(event: MouseEvent) {
    console.log(`lat: ${event.coords.lat}, long: ${event.coords.lng}`);
  }

  clickedMarker(label: string) {
    console.log(`clicked the marker: ${label}`);
  }

  onGeoFenceChange() {
    const latLng = new google.maps.LatLng(
      this.markers[0].lat,
      this.markers[0].lng,
    );
    this.circle.getBounds().then(
      (bounds) => {
        const inCircle = bounds.contains(latLng);
        this.snackBar.open(`Marker ${inCircle ? 'in' : 'out'}side geofence`, '', {
          duration: 2000,
        });
      }
    );
  }
}
