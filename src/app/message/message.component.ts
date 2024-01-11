import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnChanges {
  @Input() message!: string;
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }
}
