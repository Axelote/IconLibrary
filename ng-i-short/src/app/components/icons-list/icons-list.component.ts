import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-icons-list',
  templateUrl: './icons-list.component.html',
  styleUrls: ['./icons-list.component.scss']
})
export class IconsListComponent implements OnInit {

  @Input() searchTerm;

  icons: Observable<any[]>;
  _db: AngularFirestore;
  selected: boolean = false;

  constructor(db: AngularFirestore) {
    this.icons = db.collection('icons').valueChanges();
    this._db = db;
  }

  ngOnInit() {
  }

  toggleVisibility(visible: boolean) {
    this.selected = visible;
  }

}
