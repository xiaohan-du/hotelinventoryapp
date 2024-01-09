import { AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "../rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";
import { RoomsService } from './services/rooms.service';

@Component({
    selector: 'app-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RoomsListComponent, HeaderComponent]
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  hotelName = 'Hilton Hotel';
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  title: string = 'Room List';

  roomList: RoomList[] = [];

  selectedRoom: RoomList | null = null;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerComponents!: QueryList<HeaderComponent>;
  constructor(private roomsService: RoomsService) { }

  addRoom() {
    const room: RoomList = {
      roomNumber: 5,
      roomType: "Deluxe",
      amenities: "Air Conditioner",
      price: 2000,
      photos: "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      checkinTime: new Date('01-01-2021').toLocaleString(),
      checkoutTime: new Date('02-01-2021').toLocaleString(),
      rating: 4.8
    };
    this.roomList = [...this.roomList, room];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List!!!';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }

  ngDoCheck(): void {
      console.log('on check is called');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Hotel app";
    this.headerComponents.forEach((header, index) => {
      header.title = `Hotel title ${index}`;
    });
    console.log(this.headerComponents);
  }
}
