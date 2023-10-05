import { Component, OnInit } from '@angular/core';
import { Flight } from '../../interfaces/flight.interface';
import { FlightKey } from '../../interfaces/flight.interface';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { BackendService } from '../../services/backend.service';
import {
  MatDialogModule,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

import { FlightEditModalComponent } from '../ui/flight-edit-modal/flight-edit-modal.component';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.css'],
})
export class FlightItemComponent implements OnInit {
  faEdit = faEdit;
  flights: Flight[] = [];
  tableHeaders: (keyof Flight)[] = [];
  
  constructor(
    private backendService: BackendService,
    private dialogRef: MatDialogModule,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.backendService.getFlights().subscribe((flightData: Flight[]) => {
      this.flights = flightData;
      this.tableHeaders = Object.keys(flightData[0]) as (keyof Flight)[];
    });
  }

  getFlightPropertyValue(
    flight: Flight,
    property: FlightKey
  ): Flight[FlightKey] {
    return flight[property];
  }

  showEditModal(flight: Flight): void {
    const dialogRef = this.dialog.open(FlightEditModalComponent, {
      data: flight,
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
