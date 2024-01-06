import { Booking } from "./src/bookings";

export const Bookings: Booking[] = [
  {
    id: 1,
    name : "Marco Kittel",
    roomNumber: 100,
    startDate : new Date(),
    endDate: new Date("2023-01-05")
  },
  {
    id: 2,
    name : "Karsten Messerschmidt",
    roomNumber: 101,
    startDate : new Date("2023-01-03"),
    endDate: new Date("2023-01-07")
  },
  {
    id: 3,
    name : "Anna Lampe",
    roomNumber: 103,
    startDate : new Date(),
    endDate: new Date("2023-01-05")
  },
  {
    id: 4,
    name : "Anja Messerschmidt",
    roomNumber: 104,
    startDate : new Date("2023-01-03"),
    endDate: new Date("2023-01-07")
  }


]
