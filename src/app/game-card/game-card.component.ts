import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'], // Note: should be "styleUrls" instead of "styleUrl"
})
export class GameCardComponent {
  @Input() game: any;
  @Output() handleSendData = new EventEmitter<string>();

  handleDelete(id: string) {
    this.handleSendData.emit(id);
  }
}
