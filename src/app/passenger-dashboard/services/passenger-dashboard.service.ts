import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { Passenger } from "../models/passenger.interface";

const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {
    constructor(private http: HttpClient) { }

    public getPassengers(): Observable<Passenger[]> {
        return this.http.get<Passenger[]>(PASSENGER_API);
    }

    public updatePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http.put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger);
    }

    public deletePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http.delete<Passenger>(`${PASSENGER_API}/${passenger.id}`)
    }
}