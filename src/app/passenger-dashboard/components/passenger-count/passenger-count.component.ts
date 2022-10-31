import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-count',
    template: `<div>
      <h3>Airline Passengers!</h3>
      <div>
        <span>
            Total checked in: {{checkedInCount()}}/{{items.length}}
        </span>
      </div>
    </div>
    `
})

export class PassengerCountComponent {
    @Input()
    items: Passenger[] = [];

    public checkedInCount(): number | undefined {
        if (!this.items) return;
        return this.items.filter((passenger: Passenger) => passenger.checkedIn).length
    }
}