import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

@Component({
    selector: 'passenger-dashboard',
    template: `
    <div>
      <passenger-count [items]="passengers"></passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)" 
        (remove)="handleRemove($event)"
      ></passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
    public passengers: Passenger[] = [];

    constructor(private passengerService: PassengerDashboardService) { }

    ngOnInit(): void {
        this.passengerService.getPassengers()
            .pipe(
                catchError(err => {
                    return throwError(() => window.alert(err.message));
                })
            )
            .subscribe(passengers => this.passengers = passengers);
    }

    public handleRemove(event: Passenger): void {
        this.passengerService.deletePassenger(event)
            .pipe(
                catchError(err => {
                    return throwError(() => window.alert(err.message));
                })
            )
            .subscribe((data: Passenger) => {
                return this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id)
            })
    }

    public handleEdit(event: Passenger): void {
        this.passengerService.updatePassenger(event)
            .pipe(
                catchError(err => {
                    return throwError(() => window.alert(err.message));
                })
            )
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.map((passenger: Passenger) => {
                    if (passenger.id === event.id) {
                        passenger = Object.assign({}, passenger, event);
                    }
                    return passenger;
                });
            })
    }
}
