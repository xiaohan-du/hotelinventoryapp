import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RoomsComponent, HeaderComponent]
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'hotelinventoryapp';
  role = 'Admin';
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  ngAfterViewInit(): void {
      const componentRef = this.vcr.createComponent(RoomsComponent);
      componentRef.instance.rooms.totalRooms = 50;
  }

  @ViewChild('name', {static: true}) name!: ElementRef;
  ngOnInit(): void {
      this.name.nativeElement.innerText = "Hilton Hotel";
  }
}
