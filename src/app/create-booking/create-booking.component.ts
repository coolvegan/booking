import { Component, OnInit } from "@angular/core";
import { Booking } from "../../bookings";
import { Bookings } from "../../../mock-bookings";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-create-booking",
  templateUrl: "./create-booking.component.html",
  styleUrl: "./create-booking.component.css",
})
export class CreateBookingComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
  booking: Booking = {
    id: 100,
    name: "Dein Name",
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date(),
  };

  save(): void {
    var bookingById = Bookings.find((x) => x.id == this.booking.id)!;
    if (bookingById == null || bookingById == undefined) {
      Bookings.push(this.booking);
    } else {
      bookingById = this.booking;
    }
    this.router.navigate(["bookings"]);
  }

  ngOnInit(): void {
    if (this.router.url == "/create") {
      return;
    }
    var id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    var bookingById = Bookings.find((x) => x.id == id)!;
    this.booking = bookingById;
  }

  dateChanged(event: Event, isStart: boolean) {
    var val = (event.target as HTMLInputElement).value;
    if (isStart) {
      this.booking.startDate = new Date(val);
    } else {
      this.booking.endDate = new Date(val);
    }
  }
}
