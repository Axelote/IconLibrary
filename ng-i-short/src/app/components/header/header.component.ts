import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  searchTerm: string;
  @Output() searchModelChange: EventEmitter<string> = new EventEmitter();

  onNameChange(value: string) {
    this.searchTerm = value;
    this.searchModelChange.emit(value);
  }
}
