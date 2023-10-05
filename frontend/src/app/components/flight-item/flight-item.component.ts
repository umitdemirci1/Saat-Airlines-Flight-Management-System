import { Component, OnInit } from '@angular/core';
import { Flight } from '../../interfaces/flight.interface';
import { FlightKey } from '../../interfaces/flight.interface';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { BackendService } from '../../services/backend.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.css'],
})
export class FlightItemComponent implements OnInit {
  faCoffee = faCoffee;
  flights: Flight[] = [];
  tableHeaders: (keyof Flight)[] = [];


  constructor(private backendService: BackendService) {}
  ngOnInit(): void {
    this.backendService.getFlights().subscribe((flightData: Flight[]) => {
      this.flights = flightData;
      this.tableHeaders = Object.keys(flightData[0]) as (keyof Flight)[];
    });
  }

  getFlightPropertyValue(flight: Flight, property: FlightKey): Flight[FlightKey] {
    return flight[property];
  }
}
