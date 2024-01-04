import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "../rooms-list/rooms-list.component";

@Component({
  selector: 'app-rooms',
  standalone: true,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  imports: [CommonModule, RoomsListComponent]
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    console.log(room);
  }
  constructor() {}
  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: "Deluxe",
        amenities: "Air Conditioner",
        price: 1000,
        photos: "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        checkinTime: new Date('01-01-2021').toLocaleString(),
        checkoutTime: new Date('02-01-2021').toLocaleString(),
        rating: 4.5
      },
      {
        roomNumber: 2,
        roomType: "Deluxe",
        amenities: "Air Conditioner",
        price: 1000,
        photos: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        checkinTime: new Date('02-01-2021').toLocaleString(),
        checkoutTime: new Date('03-01-2021').toLocaleString(),
        rating: 4.3
      },
      {
        roomNumber: 3,
        roomType: "Luxury",
        amenities: "Air Conditioner",
        price: 5000,
        photos: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        checkinTime: new Date('03-01-2021').toLocaleString(),
        checkoutTime: new Date('04-01-2021').toLocaleString(),
        rating: 4.2
      },
      {
        roomNumber: 4,
        roomType: "Super Luxury",
        amenities: "Air Conditioner",
        price: 15000,
        photos: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        checkinTime: new Date('04-01-2021').toLocaleString(),
        checkoutTime: new Date('05-01-2021').toLocaleString(),
        rating: 4.1
      }
    ]
  }
}
