import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

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

    ngOnInit(): void {
        this.passengers = [
            {
                id: 1,
                fullname: 'Stephen',
                checkedIn: true,
                checkInDate: 1490742000000,
                children: null,
            },
            {
                id: 2,
                fullname: 'Ross',
                checkedIn: false,
                checkInDate: null,
                children: [
                    { name: 'Ted', age: 12 },
                    { name: 'Chloe', age: 7 },
                ],
            },
            {
                id: 3,
                fullname: 'James',
                checkedIn: true,
                checkInDate: 1491606000000,
                children: null,
            },
            {
                id: 4,
                fullname: 'Louise',
                checkedIn: true,
                checkInDate: 1488412800000,
                children: [
                    { name: 'Jessica', age: 15 },
                    { name: 'Ivan', age: 17 },
                ],
            },
            {
                id: 5,
                fullname: 'Tina',
                checkedIn: false,
                checkInDate: null,
                children: null,
            },
        ];
    }

    public handleRemove(event: Passenger): Passenger[] {
        return this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id)
    }

    public handleEdit(event: Passenger): void {
        this.passengers = this.passengers.map((passenger: Passenger) => {
            if (passenger.id === event.id) {
                passenger = Object.assign({}, passenger, event);
            }
            return passenger;
        });
    }
}
