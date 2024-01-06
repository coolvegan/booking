import { Component } from '@angular/core';
import { Bookings } from '../../../mock-bookings';
import { Booking } from '../../bookings';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {
  bookings = Bookings;


  deleteBooking(booking: Booking): void{
    var index = Bookings.indexOf(booking);
    Bookings.splice(index,1);
  }
}
