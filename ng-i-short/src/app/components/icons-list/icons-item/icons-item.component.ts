import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Icon} from '../../../models/icon';

@Component({
  selector: 'app-icons-item',
  templateUrl: './icons-item.component.html',
  styleUrls: ['./icons-item.component.scss']
})
export class IconsItemComponent implements OnInit {

  @Input() icon: Icon;
  @Output() makeVisible: EventEmitter<any> = new EventEmitter();

  imageSrc = 'https://firebasestorage.googleapis.com/v0/b/' + environment.firebaseConfig.storageBucket + '/o/';
  selected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSelected(visible: boolean) {
    this.selected = visible;
    this.makeVisible.emit(visible);
  }

}
