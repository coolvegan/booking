import { Injectable } from '@angular/core';
import { Booking } from '../bookings';
import { Bookings } from '../../mock-bookings';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  bookingsUrl : string = "/api/bookings"

  getBookings() : Observable<Booking[]> {
    var response = this.httpClient.get<Booking[]>(this.bookingsUrl);
    console.log(response);
    return response;
  }

  deleteBooking(booking: Booking): Observable<Booking>{
    var response = this.httpClient.delete<Booking>(this.bookingsUrl+"/"+booking.id);
    return response;
  }

  getBookingById(id: number): Observable<Booking>{
    var response = this.httpClient.get<Booking>(this.bookingsUrl+"/"+id);
    return response;
  }

  addBooking(booking: Booking): Observable<Booking> {
    var response = this.httpClient.post<Booking>(this.bookingsUrl,booking);
    return response;
  }

  updateBooking(booking: Booking): void {
    //var currentBooking = this.getBookingById(booking.id);
    //currentBooking = booking;
  }
}
