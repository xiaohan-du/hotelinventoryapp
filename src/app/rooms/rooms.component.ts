import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  constructor() {}
  ngOnInit(): void {
      
  }
}
