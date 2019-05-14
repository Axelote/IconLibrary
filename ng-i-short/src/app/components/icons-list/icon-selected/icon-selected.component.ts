import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Icon } from 'src/app/models/icon';

@Component({
  selector: 'app-icon-selected',
  templateUrl: './icon-selected.component.html',
  styleUrls: ['./icon-selected.component.scss']
})
export class IconSelectedComponent implements OnInit {

  @Input() selectedIcon: Icon;
  @Output() makeHidden: EventEmitter<any> = new EventEmitter();
  selected: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleSelected(visible: boolean) {
    this.selected = visible;
    this.makeHidden.emit(visible);
  }

}
