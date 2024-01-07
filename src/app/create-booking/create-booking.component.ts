import { Component, OnInit } from "@angular/core";
import { Booking } from "../../bookings";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { BookingService } from "../booking.service";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: "app-create-booking",
  templateUrl: "./create-booking.component.html",
  styleUrl: "./create-booking.component.css",
})
export class CreateBookingComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService,
    private formBuilder: FormBuilder
  ) {
  }
  booking: Booking = {
    id: 100,
    name: "Dein Name",
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date(),
  };

  bookingForm : FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    roomNumber: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
  });

  save(): void {
    this.booking.id = this.bookingForm.get('id')?.value;
    this.booking.name = this.bookingForm.get('name')?.value;
    this.booking.roomNumber = this.bookingForm.get('roomNumber')?.value;
    this.booking.startDate = this.bookingForm.get('startDate')?.value;
    this.booking.endDate = this.bookingForm.get('endDate')?.value;
    this.bookingService.addBooking(this.booking).subscribe();
    this.router.navigate(["bookings"]);
  }

  ngOnInit(): void {
    if (this.router.url == "/create") {
      return;
    }
    var id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.bookingService.getBookingById(id).subscribe(
      (result) => {
        this.booking = result;
        this.bookingForm.setValue({
          id: this.booking.id,
          roomNumber: this.booking.roomNumber,
          name: this.booking.name,
          startDate: this.booking.startDate,
          endDate: this.booking.endDate
        })

      },
    );
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
