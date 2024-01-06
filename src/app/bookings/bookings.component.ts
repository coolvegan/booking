import { Component, OnInit } from '@angular/core';
import { Booking } from '../../bookings';
import { BookingService } from '../booking.service';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit{
  bookings : Booking[] = [];

  constructor(private bookingService: BookingService){

  }

  deleteBooking(booking: Booking): void{
    this.bookingService.deleteBooking(booking);
  }

  ngOnInit(): void {
      this.bookings = this.bookingService.getBookings();
  }
}
