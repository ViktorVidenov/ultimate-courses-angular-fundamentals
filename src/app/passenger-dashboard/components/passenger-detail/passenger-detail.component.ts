import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `<div>
    <span class="status" [class.checked-in]="detail.checkedIn"> </span>
    <div *ngIf="editing">
        <input type="text" [value]="detail.fullname" (input)="onNameChange(name.value)" #name>
    </div>
    <div *ngIf="!editing">
        {{ detail.fullname }}
    </div>
    <div class="date">
      Check in date:
      {{
        detail.checkInDate
          ? (detail.checkInDate | date)
          : 'None checked Date'
      }}
    </div>
    <div class="children">Childre {{ detail.children?.length || 0 }}</div>
    <button (click)="toggleEdit()">
        {{editing ? 'Done' : 'Edit'}}
    </button>
    <button (click)="onRemove()">
        Remove
    </button>
  </div> `,
})

export class PassengerDetailComponent implements OnChanges {
    @Input()
    public detail!: Passenger;
    public editing = false;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    ngOnChanges(changes: any): void {
        if (changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue)
        }
    }

    public onNameChange(value: string): void {
        this.detail.fullname = value;
    }

    public toggleEdit(): void {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    public onRemove(): void {
        this.remove.emit(this.detail);
    }
}
