import { Component, OnInit, Input } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Icon} from '../../../models/icon';

@Component({
  selector: 'app-icons-item',
  templateUrl: './icons-item.component.html',
  styleUrls: ['./icons-item.component.scss']
})
export class IconsItemComponent implements OnInit {

  @Input() icon: Icon;
  imageSrc = 'https://firebasestorage.googleapis.com/v0/b/' + environment.firebaseConfig.storageBucket + '/o/';

  constructor() { }

  ngOnInit() {
  }

}
